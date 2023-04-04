import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import data from '../../mock/index.json'
import { useRouter } from 'next/router';

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
    <div>
        <Link key={ index } href={ url } >
          <Image src={ img1 } alt='foto' width={300} height={300} unoptimized={true} />
          <h2>{ title }</h2>
        </Link>
    </div>
  )
}
