import React from 'react'
import Image from 'next/image'
import Modal from '@/components/Modal'
import Landing from '@/images/landing-page.jpg'
import { useState } from 'react'

export default function LandingPage() {
  const [modal, setModal] = useState(false)

  const handleClick = () => {
    setModal(true)
  }

  return (
    <div>
      {
        modal && <Modal />
      }
      <div>
        <Image src={Landing} alt="Landing Page" width={1000} />
        <button onClick={handleClick}>Reserve aqui!</button>
      </div>
    </div>
  )
}
