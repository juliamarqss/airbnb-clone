import React from 'react';
import Button from '../Button';

const CardViagem: React.FC = () => {
  const reserva = localStorage.getItem('reserva');
  const reservas = reserva ? JSON.parse(reserva) : {};

  return (
    <div>
      <h3>Sua viagem:</h3>
      <p>
        Datas: {reservas.selectedDateIn} - {reservas.selectedDateOut}
      </p>
      <Button
        onClick={() => alert('editar datas')}
        disabled={false}
        title="editar"
        type="button"
      />
      <p>Hospedes: {reservas.hospedes}</p>
      <Button
        onClick={() => alert('editar datas')}
        disabled={false}
        title="editar"
        type="button"
      />
    </div>
  );
};

export default CardViagem;
