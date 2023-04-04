import React from 'react'
import Header from '@/components/Header'
import data from '../../../mock/index.json'
import CardProperty from '@/components/CardProperty'

export default function HomeCustomer() {

  return (
    <div>
      <Header />
      <h1>HomeCustomer</h1>
      {data.map((item, index) => (
        <CardProperty key={index} url={`http://localhost:3001/Customer/DetailsPropertyCustomer/${index}`} index={index} title={item.title} img1={item.img1} />
      ))}
    </div>
  )
}