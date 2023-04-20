import React from 'react'
import Modal from '@/components/Modal'
import { useState } from 'react'
import Header from '@/components/Header'

export default function LandingPage() {
  const [modal, setModal] = useState(false)
  const imagemUrl = '/images/landing-page.jpg'

  const handleClick = () => {
    setModal(true)
  }

  return (
    <div>
      {
        modal && <Modal />
      }
      <div>
        <Header isVisible={false} className="m-3 ms-5"/>
        <div className="bg-cover bg-center h-screen "  style={{ backgroundImage: `url(${imagemUrl})` }}>
          <div className="flex items-center justify-center h-screen">
            <button className="bg-[#fd595fdc] hover:bg-[#ffdddedc] text-white font-bold hover:text-[#3f3f3fef] py-2 px-4 rounded" onClick={handleClick}>Reserve aqui!</button>
          </div>
        </div>
      </div>
    </div>
  )
}
