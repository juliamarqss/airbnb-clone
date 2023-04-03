import React from 'react'
import data from '../../../mock/index.json'
import Button from '@/components/Button'
import { useRouter } from 'next/router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CardDetailsProperty from '@/components/CardDetailsProperty'


export default function DetailsPropertyCustomer() {
  const router = useRouter()

  return (
    <div>
      <Header />
      <h1>DetailsPropertyCustomer</h1>
      <CardDetailsProperty 
      title={data[0].title}
      subtitle={data[0].subtitle}
      description={data[0].description}
      details={data[0].details}
      img1={data[0].img1}
      img2={data[0].img2}
      img3={data[0].img3}
      comments={data[0].comments}
      comment={data[0].comments[0].comment}
      data={data[0].comments[0].data}
      user={data[0].comments[0].user}
      raiting={data[0].raiting}
      price={data[0].price}
      owner={data[0].owner}
      />
      <Button title="Reserve ja!" onClick={() => router.push('/Customer/CheckoutCustomer')}  type='button' disabled={false}/>
    <Footer />
    </div>
  )
}
