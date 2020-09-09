import React from 'react';

import CatPicture from '../cat.picture/catPicture'

import './cat-gallery.css'

const CatGallery = ({ lovedCats, dislikeCat }) => {

    return (

        <div className="loved-container">

            <div>

                <h1>Your Favorite Cats</h1>

            </div>

            <ul className="loved-cat-list">

                {lovedCats.map(cat => {

                    return <CatPicture key={cat.id} cat={cat} dislikeCat={dislikeCat} />

                })}

            </ul>


        </div>

    );

};

export default CatGallery;