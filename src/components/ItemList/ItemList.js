import React from 'react'
import "./ItemList.css"
import Item from "../Item/Item";
export const ItemList = ({items} ) => {
    return (
        <React.Fragment>
             <div>Algunos productos</div>
             <ul>
             {items  && items.map(item => <Item key={item.id} item={item} />)} 
             </ul>
        </React.Fragment>
    )
}
export default ItemList; 