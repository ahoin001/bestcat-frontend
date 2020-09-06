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
        
        console.log('INDEX OF NEXT RANDOM CAT: ', randomCatIndex)

        while (currentCat.catId === listOfCats[randomCatIndex].catId) {

            console.log(`WHOA! Same cat ID, we'll roll again!`)
            randomCatIndex = Math.floor(Math.random() * (listOfCats.length - 1) + 1);

        }

        console.log(listOfCats[randomCatIndex])
        setCurrentCat(listOfCats[randomCatIndex])

        // ? Set global cat imageID from the new random cat for votes
        // catImageID = catId;

    }

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
    

    }

    // const getLovedCats = async () => {
        
    //     try {
    
    //         const responseGettingLovedCats = await fetch(
    //             "https://afternoon-oasis-64306.herokuapp.com/cats/lovedcats",
    //             {
    //                 method: "GET",
    //                 headers: {
    //                     "Content-Type": "application/json"
    //                 }
    //             })

    //         console.log(responseGettingLovedCats)
    
    //     } catch (error) {
    //         console.log(error)
    //     }

    // }
    
    console.log(currentCat)

    return (

        <React.Fragment>

            <div className="buttons-container">

                <Button
                    next
                    text='Get Another Cat'
                    onClick={setRandomCat}
                    

                />

                <Button 
                text="Love Cat" 
                onClick={loveCat}/>

                <Button
                    dislike
                    text='Un-Love Cat'
                />

            </div>

            <div className="pic-container">

                <img alt="random cat" src={currentCat ? currentCat.catImageUrl : ''} />

            </div>

        </React.Fragment>

    );


};

export default CatDisplay;