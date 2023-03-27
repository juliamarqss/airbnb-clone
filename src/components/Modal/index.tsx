import React from 'react'
import Button from '../Button'
import { useRouter } from 'next/router'

export default function Modal() {
  const router = useRouter()

  const handleClick = (title: string) => {
    title === 'Entre' ? router.push('/Login') : router.push('/Register')
  }

   return (
    <div>
      <Button title='Entre' onClick={() => handleClick('Entre')} type='button' disabled={false}/>
      <Button title='Cadastre-se' onClick={() => handleClick('Cadastre-se')} type='button' disabled={false}/>
    </div>
  )
}
