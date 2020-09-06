import React, { useEffect, useState } from 'react';

import Button from '../shared/button/button'

import './cat-booth.css'

const CatDisplay = (props) => {

    const [listOfCats, setlistOfCats] = useState('')
    const [currentCat, setCurrentCat] = useState({})


    // ? Gets List of Cats From DB and also sets a random cat
    useEffect(() => {

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

                console.log('Response from API: ', apiResponseObjectWithArrayOfCats.cats)

                let catList = apiResponseObjectWithArrayOfCats.cats;

                let randomCatIndex = Math.floor(Math.random() * (catList.length - 1) + 1);

                const randomCat = catList[randomCatIndex]

                setCurrentCat(randomCat)
                setlistOfCats(catList)

            } catch (error) {
                console.log(error)
            }

        }

        getAllCatsFromApi()


    }, [])

    const setRandomCat = () => {

        let randomCatIndex = Math.floor(Math.random() * (listOfCats.length - 1) + 1);

        // while (catImageID === listOfCats[randomCatIndex].catId) {

        //     console.log(`WHOA! Same cat , we'll roll again!`)
        //     randomCatIndex = Math.floor(Math.random() * (listOfCats.length - 1) + 1);

        // }

        // console.log('INDEX OF RANDOM: ', randomCatIndex)

        // const { catId, catImageUrl, loved } = listOfCats[randomCatIndex]

        // randomCatPic.setAttribute("src", catImageUrl)

        // // ? Set global cat imageID from the new random cat for votes
        // catImageID = catId;

    }

    console.log(`CatBooth Rendered`)

    return (

        <React.Fragment>

            <div className="buttons-container">

                {/* <!-- Need to Connect to database/backend to use these --> */}

                <Button next text='Get Another Cat' />

                <Button text="Love Cat" />

                <Button dislike text='Un-Love Cat' />

            </div>

            <div className="pic-container">

                <img alt="random cat" src='' />

            </div>

        </React.Fragment>

    );


};

export default CatDisplay;