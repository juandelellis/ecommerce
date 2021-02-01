import React, {useState, useEffect} from 'react'
import './ItemDetailContainer.css'
import {ItemDetail} from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
const items = [
    {id: 1,
    title: "adidas Ultraboost",
    description: "Para correr largo",
    price: "180",
    stock: 5,
    pictureUrl: "http://www.google.com/logo.png",},
    {id: 2,
        title: "adidas Boston",
        description: "Para correr pasadas",
        price: "130",
        stock: 5,
        pictureUrl: "http://www.google.com/logo.png",},
        {id: 3,
        title: "adidas adios",
        description: "Para competencias",
        price: "170",
        stock: 5,
        pictureUrl: "http://www.google.com/logo.png",},
]
export const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])
    const [id] = useParams() 
    useEffect(() =>{
        const call = new Promise ((resolve, reject) => {
            setTimeout ( () =>{
            resolve(items)}, 2000
            )
        })
        call.then((response) => {
            setProducts(response[id - 1])
        })
    }, []);


    return (
        <div className='itemStyle'>
            <ItemDetail items={products} /> 
        </div>
              
    )
}

