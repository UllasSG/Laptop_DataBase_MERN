import React from 'react'
import Card from './Card'
import data from '../../data'
import './ProductCard.css'

function ProductPage() {
    const productinfo=data.map((prod)=>{
        return(
            <Card 
                name={prod.name}
                img={prod.img}
                cpu={prod.cpu}
                ram={prod.ram}
                scrnsize={prod.screen}
            />
        )
    })
  return (
    <div className="product-wrapper">{productinfo}</div>
    
  )
}

export default ProductPage