import React from 'react';

import Button from '../shared/button/button'

import './cat-booth.css'

const CatDisplay = (props) => {

    return (

        <React.Fragment>

            <div className="buttons-container">

                {/* <!-- Need to Connect to database/backend to use these --> */}

                <Button next text='Get Another Cat' />

                <Button text="Love Cat" />

                <Button dislike text='Un-Love Cat' />

            </div>

            <div className="pic-container">

                <img alt="random cat" src="https://cdn2.thecatapi.com/images/94n.jpg" />

            </div>

        </React.Fragment>

    );


};

export default CatDisplay;