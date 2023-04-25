import React from 'react'
import Header from '@/components/Header'
import data from '../../../mock/index.json'
import CardProperty from '@/components/CardProperty'
import Footer from '@/components/Footer'

export default function HomeCustomer() {

  return (
    <div>
      <Header isVisible={true} />
      <div className="flex flex-wrap mx-10 my-5 justify-center">
        {data.map((item, index) => (
          <CardProperty key={index} url={`http://localhost:3000/Customer/DetailsPropertyCustomer/${index}`} index={index} title={item.title} img1={item.img1} />
        ))}
      </div>
      <Footer/>
    </div>
  )
}