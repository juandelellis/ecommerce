import React from 'react'
import "./Item.css"
export const Item = ({item}) => {
    return (
        <React.Fragment>
             <div>{item.title} = {item.description}</div>
        </React.Fragment>
    )
}
export default Item; 



