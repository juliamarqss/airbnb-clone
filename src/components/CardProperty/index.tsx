import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

interface Props {
  url: string,
  index: string | number,
  title: string, 
  img1: string,
}

export default function CardProperty(
  props: Props
) {
  const { url, index, title, img1 } = props

  return (
    <div className="flex p-5 border border-black w-96">
      <Link className="" key={ index } href={ url }>
        <Image className="rounded-2xl" src={ img1 } alt="Propriedade" width={350} height={350} unoptimized={true} />
        <h2 className="whitespace-pre-line font-semibold">{ title }</h2>
        <p>ENDEREÇO</p>
      </Link>
    </div>
  )
}
