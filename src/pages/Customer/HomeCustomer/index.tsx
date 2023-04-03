import React from 'react'
import Header from '@/components/Header'
import data from '../../../mock/index.json'
import Image from 'next/image'
import Link from 'next/link'

export default function HomeCustomer() {
  return (
    <div>
      <Header />
      <h1>HomeCustomer</h1>
      {data.map((item, index) => (
        <Link key={index} href="http://localhost:3000/Customer/DetailsPropertyCustomer">
          <Image src={item.img1} alt='foto' width={300} height={300} unoptimized={true} />
          <h2>{item.title}</h2>
        </Link>
      ))}
    </div>
  )
}