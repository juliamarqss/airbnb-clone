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
      <h2>{data.title}</h2>
      <h3>{data.subtitle}</h3>
      <p>{data.description}</p>
      <ul>
        {data.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <Image src={data.img1} alt="Imagem 1"  width={300} height={300} unoptimized={true}/>
      <Image src={data.img2} alt="Imagem 2"  width={300} height={300} unoptimized={true}/>
      <Image src={data.img3} alt="Imagem 3"  width={300} height={300} unoptimized={true}/>
      <p>Avaliação: {data.raiting}/50 ({data["raiting-average"]} estrelas)</p>
      <p>Preço por diária: {data.price}</p>
      <h4>Comentários:</h4>
      <ul>
        {data.comments.map((comment, index) => (
          <li key={index}>
            <p>{comment.comment}</p>
            <p>
              {comment.user} - {comment.data}
            </p>
          </li>
        ))}
      </ul>
      <h4>Proprietário:</h4>
      <p>{data.owner.name}</p>
      <p>Membro desde {data.owner.dateOfMember}</p>
      <p>Contato: {data.owner.contact}</p>
      <p>{data.owner.info}</p>
      <Button title="Reserve ja!" onClick={() => router.push('/Customer/CheckoutCustomer')}  type='button' disabled={false}/>
    </div>
    <Footer />
    </div>
  )
}
