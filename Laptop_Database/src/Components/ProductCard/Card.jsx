import React from 'react'
import './Card.css'


function Card(props) {
  return (
    <div className='card'>
        <img src={props.img} alt="laptop-img" className='laptop-img'/>
        <a href={props.link}><h3 className="laptop-name">{props.name}</h3></a>
        <span className="laptop-cpu">{props.cpu}</span>
        <span className="laptop-ram">{props.ram} GB</span>
        <span className="laptop-screen-size">{props.scrnsize}"</span>
        <span className="laptop-prc">{props.price}</span>

    </div>
  )
}

export default Card