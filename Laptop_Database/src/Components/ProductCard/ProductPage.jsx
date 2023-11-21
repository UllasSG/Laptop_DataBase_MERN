import React from 'react'
import Card from './Card'
import data from '../../data'
import './ProductCard.css'
//import MongoConnect from '../MongoConnect'

function ProductPage() {

  
    const productinfo=data.map((prod)=>{
        return(
            <Card 
                name={prod.name}
                img={prod.img}
                cpu={prod.cpu}
                ram={prod.ram}
                scrnsize={prod.screen}
                price={prod.price}
                link={prod.link}
            />
        )
    })
  return (
    <div className="product-wrapper">
      {productinfo}
      {/* <MongoConnect /> */}
    
    </div>
    
  )
}

export default ProductPage