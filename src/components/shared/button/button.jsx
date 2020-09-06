import React from 'react';

import './button.css'

const Button = (props) => {

    return (

        <button
            className={`bttn ${props.next ? 'next' : ''}  ${props.dislike ? 'dislike' : ''} `}

        >

            {props.text ? props.text : 'Add Text To Bttn Component'}

        </button>
    );

};

export default Button;