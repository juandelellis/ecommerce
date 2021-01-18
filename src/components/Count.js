import React from 'react';

const Count = ({min, max, onAdd, count}) => {
    return (
        <>
        <div style={{display: 'flex', alignItems: 'center'}}>
           <button onClick={min}> - </button>
           <p>{count} Productos</p>
           <button onClick={max}> +  </button>
           </div>
           <button disabled={count < 2} onClick={onAdd}>
               {" "}
               Agregar {count} {" "}
               </button>
        </>
    )
}

export default Count;