import React, {useState, useEffect} from 'react'
import './ItemListContainer.css'
import {ItemList} from '../ItemList/ItemList';

const items = [
    {id: 1,
    title: "adidas Ultraboost",
    description: "Para correr largo",
    price: "180",
    pictureUrl: "http://www.google.com/logo.png",},
    {id: 2,
    title: "adidas Boston",
    description: "Para correr pasadas",
    price: "130",
    pictureUrl: "http://www.google.com/logo.png",},
    {id: 3,
    title: "adidas adios",
    description: "Para competencias",
    price: "170",
    pictureUrl: "http://www.google.com/logo.png",},
]
export const ItemListContainer = () => {
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


 
  