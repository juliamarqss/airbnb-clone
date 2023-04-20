import React from 'react'
import Header from '@/components/Header'
import data from '../../../mock/index.json'
import CardProperty from '@/components/CardProperty'

export default function HomeCustomer() {

  return (
    <div>
      <Header isVisible={true}/>
      {data.map((item, index) => (
        <CardProperty key={index} url={`http://localhost:3002/Customer/DetailsPropertyCustomer/${index}`} index={index} title={item.title} img1={item.img1} />
      ))}
    </div>
  )
}