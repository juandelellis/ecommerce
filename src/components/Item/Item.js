import React from 'react'
import "./Item.css"
import { Link } from "react-router-dom";
export const Item = ({item}) => {
    return (
        <React.Fragment>
            <Link to={`/item/${item.id}`}>
             <div>{item.title} = {item.description}</div>
             </Link>
        </React.Fragment>
    )
}
export default Item; 



