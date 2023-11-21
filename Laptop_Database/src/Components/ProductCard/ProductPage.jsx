import React, { useState, useEffect } from 'react';
import Card from './Card';
import data from '../../data';
import './ProductCard.css';

function ProductPage() {
  const [users, setUsers] = useState([]);

  const getLaptops = async () => {
    try {
      const response = await fetch('http://localhost:8080/demo', {
        method: 'GET',
      });
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      // Handle the error, e.g., display an error message
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getLaptops();
  }, []);

  const productinfo = users.map((prod) => {
    return (
      <Card
        key={prod.id} // Add a unique key prop for each item in the list
        name={prod.name}
        img={prod.img}
        cpu={prod.cpu}
        ram={prod.ram}
        scrnsize={prod.screen}
        price={prod.price}
        link={prod.link}
      />
    );
  });

  return <div className="product-wrapper">{productinfo}</div>;
}

export default ProductPage;