import React, { useEffect, useState } from 'react';

import { Navbar } from './components/navigation/navbar.jsx'
import CatDisplay from './components/cat-booth/cat-booth'
import CatGallery from './components/cat-gallery/cat-gallery'

const App = () => {

  // const [listOfCats, setlistOfCats] = useState('')
  // const [currentCat, setCurrentCat] = useState({})

  // // ? Gets List of Cats From DB and also sets a random cat
  // useEffect(() => {

  //   const getAllCatsFromApi = async () => {

  //     try {

  //       const response = await fetch(
  //         "https://afternoon-oasis-64306.herokuapp.com/cats",
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json"
  //           }
  //         })

  //       const apiResponseObjectWithArrayOfCats = await response.json()

  //       console.log('Response from API: ', apiResponseObjectWithArrayOfCats.cats)

  //       let catList = apiResponseObjectWithArrayOfCats.cats;

  //       let randomCatIndex = Math.floor(Math.random() * (catList.length - 1) + 1);

  //       const randomCat = catList[randomCatIndex]

  //       setCurrentCat(randomCat)
  //       setlistOfCats(catList)

  //     } catch (error) {
  //       console.log(error)
  //     }

  //   }

  //   getAllCatsFromApi()

  // }, [])


  return (
    <div className="App">

      <Navbar />

      <CatDisplay
        // catList={listOfCats}
        // currentCat={currentCat}

      />

      <CatGallery />

    </div>
  );
};

export default App;