import React from 'react';
import App from './App';

const WishList = (props) => {
    return (
        <div>
            {props.availItems.map(item => 
            <li>
                {item.text}
                <button onClick={() => props.moveToAvailItem(item)}>Remove from Wish List</button>
            </li>)}
            
        </div>
    )
}

export default WishList;