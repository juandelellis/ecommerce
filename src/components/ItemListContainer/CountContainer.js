import React, { useState } from 'react';
import Count from '../Count';
const CountContainer = ({initial, stock}) => {
    const [count, setCount] = useState(initial);

    const add = () => {
        if(count > stock) {
            alert ("Superaste el Stock");
        } else {
            setCount (count + 1);
        }
    };

    const sub = () =>  {
        if (count > 0) setCount(count - 1)
        else alert ("Tenés que agregar al menos un item");
    };

    const onAdd = () => {
        alert (`Àgregaste S{count} al carrito`);
    }

    return (
        <>
           <Count min={sub} max={add} onAdd={onAdd} count={count}/> 
        </>);
};

export default CountContainer; 