import React from 'react';
import Image from 'next/image';

// import { Container } from './styles';

const CardInfoCheckout: React.FC = () => {
const reserva = localStorage.getItem('reserva');
const reservas = reserva ? JSON.parse(reserva) : {};

  return (
    <div>
      <h1> Informações do local</h1>
      <div>
        <Image src={reservas?.image} alt="Imagem do local" 
      
      width={200}
      height={200}
        />
      </div>
      </div>
  );
}

export default CardInfoCheckout;