import Button from '@/components/Button'
import Input from '@/components/Input'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import useLocalStorage from "use-local-storage";

export default function Login() {
  const [username, setUsername] = useLocalStorage('username','')
  const [password, setPassword] = useState('')
  
  const router = useRouter()

  const handleChangeUsername = (event: any): void => {
    setUsername(event.target.value)
  }

  const handleChangePassword = (event: any): void => {
    setPassword(event.target.value)
  }

  // const isLogged = () => {
  //   if (localStorage.getItem('user')) {
  //     const userData = JSON.parse(localStorage.getItem('user'));
  //     history.push('/customer/products');
  //   }
  // };

  return (
    <div>
      <h1>Login</h1>
      <Input type="text" placeholder='Username' onChange={(event) => handleChangeUsername(event)} value={username} />
      <Input type="password" placeholder='Password' onChange={(event) => handleChangePassword(event)} value={password} />
      <Button title="Login" onClick={() => router.push('/Customer/HomeCustomer')}  type='button' disabled={username && password ? false : true}/>
    </div>
  )
}
