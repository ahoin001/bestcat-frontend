import React, { useEffect, useState } from 'react';

import Button from '../shared/button/button'

import './cat-booth.css'

const CatDisplay = ({ listOfCats, currentCat, setCurrentCat, loveCat, dislikeCat, setRandomCat }) => {

    // const setRandomCat = () => {

    //     console.log(currentCat)

    //     let randomCatIndex = Math.floor(Math.random() * (listOfCats.length - 1) + 1);

    //     // ? Prevent back to back random cat
    //     while (currentCat.catId === listOfCats[randomCatIndex].catId) {

    //         console.log(`WHOA! Same cat ID, we'll roll again!`)
    //         randomCatIndex = Math.floor(Math.random() * (listOfCats.length - 1) + 1);

    //     }

    //     setCurrentCat(listOfCats[randomCatIndex])

    // }

    // const loveCat = async () => {

    //     // ? Convert a request object to JSON for transfer to api
    //     let requestBodyLovedCat = JSON.stringify({
    //         idOfCatToLove: currentCat.catId,
    //         loved: true
    //     })

    //     console.log('(FE) Your cat vote: ', requestBodyLovedCat)

    //     try {

    //         let responseAfterUpdatingCat = await fetch(
    //             "https://afternoon-oasis-64306.herokuapp.com/cats",
    //             {
    //                 method: "PATCH",
    //                 body: requestBodyLovedCat,
    //                 headers: {
    //                     "Content-Type": "application/json"
    //                 }

    //             })

    //         responseAfterUpdatingCat = await responseAfterUpdatingCat.json()
    //         console.log(responseAfterUpdatingCat)

    //     } catch (error) {
    //         console.log(error)
    //     }

    //     setRandomCat()

    // }

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
                    onClick={loveCat}

                />

                <Button
                    dislike
                    text='Un-Love Cat'
                    onClick={dislikeCat}
                />

            </div>

            <div className="pic-container">

                <img alt="random cat" src={currentCat ? currentCat.catImageUrl : ''} />

            </div>

        </React.Fragment>

    );


};

export default CatDisplay;