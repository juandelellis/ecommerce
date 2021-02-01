import React from 'react'
import "./ItemDetail.css"
import Item from "../Item/Item";
import Count from "../Count"
import { useParams } from "react-router-dom";
export const ItemDetail = ({items} ) => {
    const { itemId } = useParams();
    return (
        <React.Fragment>
             <div>Conocé este producto</div>
             <ul>
             {items && items.map (item => <Item key={item.id} item={item.title}  />)} 
             </ul>
             <Count item={items}/>
             <p>{items.stock > 0 ? `Stock disponible: ${items.stock}` : `No hay Stock disponible de este producto`}</p>
            <button>Terminá tu compra</button>
        </React.Fragment>
        
    )
}
export default ItemDetail;  