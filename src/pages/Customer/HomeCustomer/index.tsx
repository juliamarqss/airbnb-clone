import React from 'react'
import Header from '@/components/Header'
import data from '../../../mock/index.json'
import Image from 'next/image'
import Link from 'next/link'

export default function HomeCustomer() {
  console.log(data.img1)
  return (
    <div>
      <Header />
      <h1>HomeCustomer</h1>
      <Link href="http://localhost:3000/Customer/DetailsPropertyCustomer">
      <Image src={data.img1} alt='foto'  width={300} height={300} unoptimized={true} />
      <h2>{data.title}</h2>
      </Link>
    </div>
  )
}
