import Button from '@/components/Button'
import Input from '@/components/Input'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import isEmailValid from '../../utils/IsEmailValid'
import { loginPost } from '@/API/fetch';

export default function Register() {
  const [data, setData] = useState<any>(null);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState<boolean>(false);

  const usernameJSON = localStorage.getItem('username');
  const username = usernameJSON ? JSON.parse(usernameJSON) : '';
  
  const router = useRouter()

  const handleChangeEmail = (event: any): void => {
    setEmail(event.target.value)
  }

  const handleChangePassword = (event: any): void => {
    setPassword(event.target.value)
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await loginPost(`http://localhost:3000/users`, {} );
        console.log("response", response);
        setData(response);
      } catch (error) {
        console.log('azedou maluco:', error)
      }
      setLoading(false);
    };
    fetchData();
  }, []);



  return (
    <div>
      <h1>Cadastre-se</h1>
      <Input type="text" placeholder='Email' onChange={(event) => handleChangeEmail(event)} value={email} />
      <Input type="password" placeholder='Password' onChange={(event) => handleChangePassword(event)} value={password} />
      <Button title="Cadastre-se" onClick={() => router.push('/Customer/HomeCustomer')}  type='button' disabled={isEmailValid(email) && password ? false : true}/>
    </div>
  )
}
