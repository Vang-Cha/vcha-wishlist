import React from 'react';

const ListItems = (props) => {
    return (
        <div>
            {props.availItems.map(item => 
            <li>
                {item.text}
                <button onClick={() => props.moveToWishList(item)}>Add to Wish List</button>
            </li>)}
        </div>
    )
}

export default ListItems;