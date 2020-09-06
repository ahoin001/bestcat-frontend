import React, { useEffect, useState } from 'react';

import './cat-gallery.css'

const CatGallery = () => {

    const [lovedCats, setLovedCats] = useState([])

    useEffect(() => {

        const getLovedCats = async () => {

            try {

                let responseGettingLovedCats = await fetch(
                    "https://afternoon-oasis-64306.herokuapp.com/cats/lovedcats",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })

                responseGettingLovedCats = await responseGettingLovedCats.json()

                console.log(responseGettingLovedCats)

                setLovedCats(responseGettingLovedCats.lovedCats)

            } catch (error) {
                console.log(error)
            }

        }

        getLovedCats()

    }, [])



    return (

        <div className="loved-container">

            <div>

                <h1>Your Favorite Cats</h1>

            </div>

            <ul className="loved-cat-list">

                {lovedCats.map(cat => {

                    return <img src={cat.catImageUrl} className="fav-cat" alt="Loved-Cat-Pic" key={cat.id} />

                })}

                {/* <img src="https://cdn2.thecatapi.com/images/94n.jpg" className="fav-cat" alt="Loved-Cat-Pic" />
                <img src="https://cdn2.thecatapi.com/images/bat.jpg" className="fav-cat" alt="Loved-Cat-Pic" /> */}

            </ul>


        </div>

    );

};

export default CatGallery;