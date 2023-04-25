import React, { useState, useEffect } from 'react';
import data from '../../../mock/index.json';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function CheckoutCustomer() {
  const [reserva, setReserva] = useState<any>();

  useEffect(() => {
    const reservaJSON = localStorage.getItem('reserva');
    const reservas = reservaJSON ? JSON.parse(reservaJSON) : {};
    setReserva(reservas);
  }, []);

  return (
    <div>
      <Header />
      <span>
        <Button
          title="<"
          onClick={() => alert('voltar para a pagina anterior')}
          disabled={false}
          type="button"
        />
        <h1>Pedir para reservar</h1>
      </span>
      <div>
        <span>Detalhes do pagamento: </span>
        <p>Total:{reserva?.price}</p>
        PAGAMENTOS AQUI CAMBADA
        <p>{reserva?.title}</p>
        <p>Comentários: {reserva?.comments.length}</p>
        <p>Raiting: {reserva?.raiting}</p>
      </div>

      <Footer />
    </div>
  );
}
