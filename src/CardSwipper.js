import React from 'react';
import './CardSwipper.css'

function CardSwipper({ src, title, description, price }) {
    return (
        <div className='cardSwipper' style={{backgroundImage: `url(${src})`, backgroundSize: 'cover'}}>
            <div className="cardSwipper__info">
                <h4>Collection</h4>
                <h2>{title}</h2>
                <h3>{price}</h3>
            </div>
            <div className='bottom'><button className='button'>Show All</button></div>
        </div>
    )
}

export default CardSwipper
