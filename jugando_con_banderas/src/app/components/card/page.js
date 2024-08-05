import React from 'react';
import Image from 'next/image';

const Card = ({ pais, opciones }) => {
  return (
    <div>
        
      <Image src={pais}  width={100} height={100} />
      <ul>
        {opciones.map((opcion, index) => (
          <li key={index}>{opcion}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;