
import React, { useState, useEffect } from 'react';

const CarList = () => {
  // მანქანების საწყისი მასივი
  const cars = ['BMW', 'Mercedes', 'Audi', 'Tesla', 'Porsche'];

  // მდგომარეობა (state), სადაც თავიდან ცარიელი მასივია
  const [selectedCars, setSelectedCars] = useState([]);

  // ფუნქცია, რომელიც ამატებს არჩეულ მანქანას მასივში
  const handleCarClick = (car) => {
    setSelectedCars((prevSelected) => [...prevSelected, car]);
  };

  // კონსოლში ბეჭდვა ყოველ ჯერზე, როცა მდგომარეობა იცვლება
  useEffect(() => {
    console.log('არჩეული მანქანების მასივი:', selectedCars);
  }, [selectedCars]);

  return (
    <div>
      <h2>მანქანების სია:</h2>
      <ul>
        {cars.map((car, index) => (
          <li 
            key={index} 
            onClick={() => handleCarClick(car)}
            style={{ cursor: 'pointer', margin: '5px 0', listStyle: 'square' }}
          >
            {car}
          </li>
        ))}
      </ul>
      <p><i>დააკლიკეთ მანქანის სახელს, რომ დაემატოს მასივში (იხ. კონსოლი)</i></p>
    </div>
  );
};

export default CarList;