import React from 'react'
import "./ItemDetail.css"
import Item from "../Item/Item";
export const ItemDetail = ({items} ) => {
    return (
        <React.Fragment>
             <div>Conocé este producto</div>
             <ul>
             {items && items.map (item => <Item key={item.id} item={item.title}  />)} 
             </ul>
        </React.Fragment>
    )
}
export default ItemDetail;  