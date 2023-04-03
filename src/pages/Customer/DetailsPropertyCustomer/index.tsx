import React from 'react'
import data from '../../../mock/index.json'
import Image from 'next/image'
import Button from '@/components/Button'
import { useRouter } from 'next/router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export default function DetailsPropertyCustomer() {
  const router = useRouter()

  return (
    <div>
      <Header />
      <h1>DetailsPropertyCustomer</h1>
      <div>
      <h2>{data[0].title}</h2>
      <h3>{data[0].subtitle}</h3>
      <p>{data[0].description}</p>
      <ul>
        {data[0].details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <Image src={data[0].img1} alt="Imagem 1"  width={300} height={300} unoptimized={true}/>
      <Image src={data[0].img2} alt="Imagem 2"  width={300} height={300} unoptimized={true}/>
      <Image src={data[0].img3} alt="Imagem 3"  width={300} height={300} unoptimized={true}/>
      <p>Avaliação: {data[0].raiting}/50 ({data[0]["raiting-average"]} estrelas)</p>
      <p>Preço por diária: {data[0].price}</p>
      <h4>Comentários:</h4>
      <ul>
        {data[0].comments.map((comment, index) => (
          <li key={index}>
            <p>{comment.comment}</p>
            <p>
              {comment.user} - {comment.data[0]}
            </p>
          </li>
        ))}
      </ul>
      <h4>Proprietário:</h4>
      <p>{data[0].owner.name}</p>
      <p>Membro desde {data[0].owner.dateOfMember}</p>
      <p>Contato: {data[0].owner.contact}</p>
      <p>{data[0].owner.info}</p>
      <Button title="Reserve ja!" onClick={() => router.push('/Customer/CheckoutCustomer')}  type='button' disabled={false}/>
    </div>
    <Footer />
    </div>
  )
}
