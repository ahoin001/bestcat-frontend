import React from 'react';

import Button from '../shared/button/button'

import './catPicture.css'

const CatPicture = ({ cat, setRefetch }) => {

    const dislikeCat = async () => {

        // ? Convert Request to JSON for transfer to api
        let requestBodyDislikedCat = JSON.stringify({
            idOfCatToLove: cat.catId,
            loved: false
        })

        console.log('#############');

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
            console.log('@@@@@', responseAfterUpdatingCat)

        } catch (error) {
            console.log(error)
        }

        setRefetch(true)

    }

    return (

        <React.Fragment>


            <div className='cat-pic-containter'>

                <Button
                    dislike
                    text={"Unlike Cat ?"}
                    classes={'dropdown-content grow-animation'}
                    onClick={() => dislikeCat()}

                />

                <img
                    src={cat.catImageUrl}
                    className="fav-cat darkenAnimation"
                    alt="Loved-Cat-Pic"
                    key={cat.id}

                />

            </div>


        </React.Fragment>

    );

};

export default CatPicture;