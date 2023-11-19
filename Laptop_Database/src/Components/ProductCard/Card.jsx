import React from 'react'
import './Card.css'


function Card(props) {
    return (
        <div className='card'>
            <img src={props.img} alt="laptop-img" className='laptop-img' />
            <a href={props.link} target='_blank'><h3 className="laptop-name">{props.name}</h3></a>
            <div className="laptop-info">
                <span className="laptop-cpu">{props.cpu}</span>
                <span className="laptop-ram">{props.ram} GB</span>
                <span className="laptop-screen-size">{props.scrnsize}"</span>
                <span className="laptop-prc">INR {props.price}</span>
            </div>
        </div>
    )
}

export default Card