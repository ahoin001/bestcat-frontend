import React, { useEffect, useState } from 'react';

import Button from '../shared/button/button'

import './cat-booth.css'

const CatBooth = ({ currentCat, loveCat, dislikeCat, setRandomCat }) => {

    return (

        <React.Fragment>

            <div className="buttons-container">

                <Button
                    next
                    text='Get Another Cat'
                    onClick={setRandomCat}


                />

                {
                    currentCat.loved
                        ?
                        <Button
                            dislike
                            text='Un-Love Cat'
                            onClick={dislikeCat}
                        />
                        :
                        <Button
                            text="Love Cat"
                            onClick={loveCat}

                        />

                }

            </div>

            <div className="pic-container">

                <img alt="random cat" src={currentCat ? currentCat.catImageUrl : ''} />

            </div>

        </React.Fragment>

    );


};

export default CatBooth;