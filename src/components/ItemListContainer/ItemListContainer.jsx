import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = ({saludo}) => {
    return (
        <div className='mt-5'>
            <h4>{saludo}</h4>
        </div>
    )
}

export default ItemListContainer