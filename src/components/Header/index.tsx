import React from 'react'
import Image from 'next/image'
import Logo from '@/images/logo.png'

export default function Header() {
  return (
    <div>
      <Image src={Logo} alt="logo" height={30} />
    </div>
  )
}
