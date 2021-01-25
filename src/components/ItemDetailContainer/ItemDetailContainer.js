import React, {useState, useEffect} from 'react'
import './ItemDetailContainer.css'
import {ItemList} from '../ItemList/ItemList';

const items = [
    {id: 1,
    title: "adidas Ultraboost",
    description: "Para correr largo",
    price: "180",
    pictureUrl: "http://www.google.com/logo.png",},
]
export const ItemDetailContainer = () => {
    const [products, setProducts] = useState() 
    useEffect(() =>{
        const call = new Promise ((resolve, reject) => {
            setTimeout ( () =>{
            resolve(items)}, 2000
            )
        })
        call.then((response) => {
            setProducts(response)
        })
    }, []);


    return (
        <div className='itemStyle'>
            <button>Hacé Click para conocer todos nuestros productos</button>
            <ItemList items={products} /> 
        </div>
              
    )
}