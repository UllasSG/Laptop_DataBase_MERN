// ChoicePage.js
import React from 'react';
import RadioButtonLine from './RadioButtonLine';

function ChoicePage(props) {
  function tempGetData(formData) {
    console.log(formData);
    props.handleSub(formData);
  }

  return <RadioButtonLine handleSub={tempGetData} />;
}

export default ChoicePage;
