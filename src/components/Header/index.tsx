import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Logo from '@/images/logo.png'
import IconProfile from '@/images/icon-profile.png'
import { useRouter } from 'next/router'

interface Props {
  isVisible: boolean,
}

export default function Header(props: Props) {
  const { isVisible } = props;
  const router = useRouter()

  const handleLogout = () => {
    router.push('/')
  }

  return (
    <div className="flex justify-between p-6 align-middle border border-b-[#c4c4c4ef]">
      <Image src={Logo} alt="logo" height={30} />
      {
        isVisible && 
        (
        <nav className="flex align-middle text-[#3f3f3fef] font-bold">
          <button type="button" onClick={() => router.push(`/Profile`)} className="mr-10">
            <Image src={IconProfile} alt="Imagem do perfil" width={25} height={25}/>
          </button>
          <button type="button" onClick={handleLogout}>Sair</button>
        </nav>
        )
      }
   </div>
  )
}