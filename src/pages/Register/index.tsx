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
  const [cpf, setCpf] = useState('')
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter()

  const handleChangeEmail = (event: any): void => {
    setEmail(event.target.value)
  }

  const handleChangeCpf = (event: any): void => {
    setCpf(event.target.value)
  }

  const handleChangePassword = (event: any): void => {
    setPassword(event.target.value)
  }

  const handleClick = async () => {
    // const fetchData = async () => {
      setLoading(true);
      try {
        const response = await loginPost(`http://localhost:3000/users`, {
          email,
          password,
          cpf
        });
        console.log("response", response);
        setData(response);
      } catch (error) {
        console.log('azedou maluco:', error)
      }
      setLoading(false);
    // };

    router.push('/Customer/HomeCustomer')
  }


  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await loginPost(`http://localhost:3000/users`, {
  //         email,
  //         password,
  //         cpf
  //       });
  //       console.log("response", response);
  //       setData(response);
  //     } catch (error) {
  //       console.log('azedou maluco:', error)
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, [cpf, email, password]);



  return (
    <div>
      <h1>Cadastre-se</h1>
      <Input type="text" placeholder='Email' onChange={(event) => handleChangeEmail(event)} value={email} />
      <Input type="password" placeholder='Password' onChange={(event) => handleChangePassword(event)} value={password} />
      <Input type="cpf" placeholder='Cpf' onChange={(event) => handleChangeCpf(event)} value={cpf} />
      <Button title="Cadastre-se" onClick={() => handleClick()}  type='button' disabled={isEmailValid(email) && password ? false : true}/>
    </div>
  )
}
