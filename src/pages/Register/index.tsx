import Button from '@/components/Button'
import Input from '@/components/Input'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import isEmailValid from '../../utils/IsEmailValid'

export default function Register() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const router = useRouter()

  const handleChangeEmail = (event: any): void => {
    setEmail(event.target.value)
  }

  const handleChangePassword = (event: any): void => {
    setPassword(event.target.value)
  }


  return (
    <div>
      <h1>Cadastre-se</h1>
      <Input type="text" placeholder='Email' onChange={(event) => handleChangeEmail(event)} value={email} />
      <Input type="password" placeholder='Password' onChange={(event) => handleChangePassword(event)} value={password} />
      <Button title="Cadastre-se" onClick={() => router.push('/Customer/HomeCustomer')}  type='button' disabled={isEmailValid(email) && password ? false : true}/>
    </div>
  )
}
