import React from 'react';
import Button from '../Button';

const CardViagem: React.FC = () => {
  const reserva = localStorage.getItem('reserva');
  const reservas = reserva ? JSON.parse(reserva) : {};
  const totalDias = reservas?.selectedDateOut - reservas?.selectedDateIn;

  return (
    <div>
      <h3>Sua viagem:</h3>
      <p>
        Datas: {totalDias}
      </p>
      <Button
        onClick={() => alert('editar datas')}
        disabled={false}
        title="editar"
        type="button"
      />
      <p>Hospedes: {reservas.hospedes}</p>
      <Button
        onClick={() => alert('editar pessoas')}
        disabled={false}
        title="editar"
        type="button"
      />
    </div>
  );
};

export default CardViagem;
