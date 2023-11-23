import React, { useState, useEffect } from 'react';
import Card from './Card';
import data from '../../data';
import './ProductCard.css';
import formdata from '../../formdata';

function ProductPage(props) {
  const [requestData, setRequestData] = React.useState(formdata)
  //console.log('formdata',formdata);
  //console.log('requestdata',requestData);
  const [users, setUsers] = useState([]);
  const [laptops, setLaptops] = useState([])
  console.log(props.render)
  const getLaptops = async () => {
    try {
      const response = await fetch('http://localhost:8080/demo', {
        method: 'GET',
      });
      const data = await response.json();
      setLaptops(data);
    } catch (error) {
      // Handle the error, e.g., display an error message
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getLaptops();
  }, []);



  /////////////////////////////////////
  function filterLaptops(userInput, laptops) {
    const COMPANY = userInput.company==null?' ':userInput.company
    const CPU = userInput.cpu==null?' ':userInput.cpu
    const GRAPHICS =userInput.graphics==null?'t':userInput.graphics
    const PRICE =userInput.price==""?1000000000:userInput.price
    const RAM =userInput.ram==null?"GB":userInput.ram
    const SCREEN = userInput.screenSize==null?' ':userInput.screenSize
    console.log('screen',SCREEN)
    return laptops.filter((laptop) => {
      // Check if the company is present in the name
      console.log('infunc', COMPANY)
      const companyInName = laptop.name.includes(COMPANY);

      // Check other specifications
      const cpuMatch = CPU === null || (laptop.cpu !== null && laptop.cpu.includes(CPU));
      const graphicsMatch = GRAPHICS === null || (laptop.graphics !== null && laptop.graphics.includes(GRAPHICS));
      const priceMatch =  laptop.price <= PRICE;
      const ramMatch = RAM === null || (laptop.ram !== null && laptop.ram.includes(RAM));
      const screenSizeMatch = SCREEN === null || (laptop.screen !== null && laptop.screen.includes(SCREEN));


      // Return true if all conditions are met
      // && cpuMatch && graphicsMatch && priceMatch && ramMatch && screenSizeMatch
      console.log(RAM,ramMatch)
      // return companyInName;
      return companyInName && cpuMatch && graphicsMatch && priceMatch && ramMatch && screenSizeMatch;
    });
  }

  const filteredLaptops = filterLaptops(props.render, laptops);
  console.log(filteredLaptops)



  /////////////////////////////////////

  const productinfo = filteredLaptops.map((prod) => {

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

  return (
    <div>
      <h3>{productinfo.length==0?"Sorry, no matching laptops. Try again":`showing ${productinfo.length} results`}</h3>
      <div className="product-wrapper">{productinfo}</div>
    </div>
  );
}

export default ProductPage;