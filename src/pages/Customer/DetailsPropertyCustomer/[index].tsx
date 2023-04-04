import React, { useState } from "react";
import data from '../../../mock/index.json'
import Button from '@/components/Button'
import { useRouter } from 'next/router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CardDetailsProperty from '@/components/CardDetailsProperty'
import useLocalStorage from "use-local-storage";



export default function DetailsPropertyCustomer() {
  const [reserva, setReserva] = useLocalStorage('reserva', {})
  const [selectedDateIn, setSelectedDateIn] = useState('');
  console.log("selectedDateIn", selectedDateIn);
  const [selectedDateOut, setSelectedDateOut] = useState('');
  console.log("selectedDateOut", selectedDateOut);

  const router = useRouter()
  const number: any = router.query.index

  const handleClick = () => {
    setReserva(data[number])
    console.log(data[number]);
    handleReserve()
    router.push(`/Customer/CheckoutCustomer`)
  }
  

  const handleDateCheckIn = (e:any) => {
    setSelectedDateIn(e.target.value);
  }

  const handleDateCheckout= (e:any) => {
    setSelectedDateOut(e.target.value);
  }

  const handleReserve = () => {
    const startDate = new Date(selectedDateIn);
    const endDate = new Date(selectedDateOut);
    const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    alert(`Reserva feita com sucesso! Total de ${diffDays || 1} dias.`);
  }
  const today = new Date();
  return (
    <div>
      <Header />
      <CardDetailsProperty
      index={number}
      title={data[number]?.title}
      subtitle={data[number]?.subtitle}
      description={data[number]?.description}
      details={data[number]?.details}
      img1={data[number]?.img1}
      img2={data[number]?.img2}
      img3={data[number]?.img3}
      comments={data[number]?.comments}
      raiting={data[number]?.raiting}
      price={data[number]?.price}
      owner={data[number]?.owner}
      />
      <div>
        <label htmlFor="date">Select a date:</label>
          <input  type="date" value={selectedDateIn || new Date().toISOString().slice(0, 10)} onChange={handleDateCheckIn} />
          <input type="date" value={selectedDateOut || new Date(today.setDate(today.getDate() + 1)).toISOString().slice(0, 10)} onChange={handleDateCheckout} />
      </div>
      <Button title="Reserve ja!" onClick={() => handleClick()}  type='button' disabled={false}/>
    <Footer />
    </div>
  )
}
