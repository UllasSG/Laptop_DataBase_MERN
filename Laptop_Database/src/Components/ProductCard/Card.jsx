import React from 'react'
import './Card.css'


function Card(props) {
  return (
    <div className='card'>
        <img src={props.img} alt="laptop-img" className='laptop-img'/>
        <a href={props.link}><h3 className="laptop-name">{props.name}</h3></a>
        <p className="laptop-cpu">{props.cpu}</p>
        <p className="laptop-ram">{props.ram}</p>
        <p className="laptop-screen-size">{props.scrnsize}</p>
        <p className="laptop-prc">{props.price}</p>

    </div>
  )
}

export default Card