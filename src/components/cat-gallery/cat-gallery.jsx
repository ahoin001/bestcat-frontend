import React from 'react';

import './cat-gallery.css'

const CatGallery = () => {

    return (

        <div className="loved-container">

            <div>

                <h1>Your Favorite Cats</h1>

            </div>

            <ul className="loved-cat-list">

                <img src="https://cdn2.thecatapi.com/images/94n.jpg" className="fav-cat" alt="Loved-Cat-Pic" />
                <img src="https://cdn2.thecatapi.com/images/bat.jpg" className="fav-cat" alt="Loved-Cat-Pic" />

            </ul>


        </div>

    );

};

export default CatGallery;