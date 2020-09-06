import React, { useEffect, useState } from 'react';

import { Navbar } from './components/navigation/navbar.jsx'
import CatBooth from './components/cat-booth/cat-booth'
import CatGallery from './components/cat-gallery/cat-gallery'

const App = () => {


  const [listOfCats, setlistOfCats] = useState('')
  const [currentCat, setCurrentCat] = useState({})
  const [lovedCats, setLovedCats] = useState([]);

  // initally true because we need data first
  const [refetch, setRefetch] = useState(true);

  // ? Gets List of Cats From DB and also sets a random cat
  useEffect(() => {

    if (refetch) {

      const getAllCatsFromApi = async () => {

        try {

          const response = await fetch(
            "https://afternoon-oasis-64306.herokuapp.com/cats",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json"
              }
            })

          const apiResponseObjectWithArrayOfCats = await response.json()

          console.log('Response from cat list API Route: ', apiResponseObjectWithArrayOfCats.cats)

          const catList = apiResponseObjectWithArrayOfCats.cats;

          let randomCatIndex = Math.floor(Math.random() * (catList.length - 1) + 1);

          const randomCat = catList[randomCatIndex]

          const filterLovedCats = catList.filter(cat => cat.loved === true)
          console.log('Loved Cats: ', filterLovedCats)

          setCurrentCat(randomCat)
          setlistOfCats(catList)
          setLovedCats(filterLovedCats)

        } catch (error) {
          console.log(error)
        }

        setRefetch(false);

      }

      getAllCatsFromApi()

    }

  }, [refetch])

  const loveCat = async () => {

    // ? Convert a request object to JSON for transfer to api
    let requestBodyLovedCat = JSON.stringify({
      idOfCatToLove: currentCat.catId,
      loved: true
    })

    console.log('(FE) Your cat vote: ', requestBodyLovedCat)

    try {

      let responseAfterUpdatingCat = await fetch(


        "https://afternoon-oasis-64306.herokuapp.com/cats",
        {
          method: "PATCH",
          body: requestBodyLovedCat,
          headers: {
            "Content-Type": "application/json"
          }

        })

      responseAfterUpdatingCat = await responseAfterUpdatingCat.json()
      console.log(responseAfterUpdatingCat)

    } catch (error) {
      console.log(error)
    }

    // Set next Cat for voting
    setRefetch(true)

  }

  const dislikeCat = async () => {

    // ? Convert Request to JSON for transfer to api
    let requestBodyDislikedCat = JSON.stringify({
      idOfCatToLove: currentCat.catId,
      loved: false
    })

    // console.log('(FE) Your cat vote: ', requestBodyDislikedCat)

    try {

      let responseAfterUpdatingCat = await fetch(

        "https://afternoon-oasis-64306.herokuapp.com/cats",
        {
          method: "PATCH",
          body: requestBodyDislikedCat,
          headers: {
            "Content-Type": "application/json"
          }

        })

      responseAfterUpdatingCat = await responseAfterUpdatingCat.json()
      console.log(responseAfterUpdatingCat)

    } catch (error) {
      console.log(error)
    }

    setRefetch(true)

  }

  const setRandomCat = () => {

    console.log(currentCat)

    let randomCatIndex = Math.floor(Math.random() * (listOfCats.length - 1) + 1);

    // ? Prevent back to back random cat
    while (currentCat.catId === listOfCats[randomCatIndex].catId) {

      console.log(`WHOA! Same cat ID, we'll roll again!`)
      randomCatIndex = Math.floor(Math.random() * (listOfCats.length - 1) + 1);

    }

    // Should be triggering rerender making useEffect trigger right?
    setCurrentCat(listOfCats[randomCatIndex])

  }

  return (
    <div className="App">

      <Navbar />

      <CatBooth
        listOfCats={listOfCats}
        currentCat={currentCat}
        setCurrentCat={setCurrentCat}
        loveCat={loveCat}
        dislikeCat={dislikeCat}
        setRandomCat={setRandomCat}

      />

      <CatGallery
        lovedCats={lovedCats}

      />

    </div>
  );
};

export default App;