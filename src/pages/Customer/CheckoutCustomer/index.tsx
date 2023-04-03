import React from 'react'
import data from '../../../mock/index.json'
import Button from '@/components/Button'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'


export default function CheckoutCustomer() {
  return (
    <div>
      <Header />
      <h1>CheckoutCustomer</h1>
      <div>
        Detalhes do pagamento:
        Total:<p>{data[0].price}</p>
        PAGAMENTOS AQUI CAMBADA
        {/* <h2>{data.title}</h2> */}
        <h3>{data[0].subtitle}</h3>

      </div>

    <Footer />
    </div>
  )
}
