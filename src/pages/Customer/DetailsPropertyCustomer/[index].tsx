import React from 'react'
import data from '../../../mock/index.json'
import Button from '@/components/Button'
import { useRouter } from 'next/router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CardDetailsProperty from '@/components/CardDetailsProperty'


export default function DetailsPropertyCustomer() {
  const router = useRouter()
  const number: any = router.query.index

  return (
    <div>
      <Header />
      <h1>DetailsPropertyCustomer</h1>
      <CardDetailsProperty
      index={number}
      title={data[number].title}
      subtitle={data[number].subtitle}
      description={data[number].description}
      details={data[number].details}
      img1={data[number].img1}
      img2={data[number].img2}
      img3={data[number].img3}
      comments={data[number].comments}
      raiting={data[number].raiting}
      price={data[number].price}
      owner={data[number].owner}
      />
      <Button title="Reserve ja!" onClick={() => router.push('/Customer/CheckoutCustomer')}  type='button' disabled={false}/>
    <Footer />
    </div>
  )
}
