import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Logo from '@/images/logo.png'
import { useRouter } from 'next/router'

interface Props {
  isVisible: boolean,
  className?: string
}

export default function Header(props: Props) {
  const { isVisible, className } = props;

  const [username, setUsername] = useState('');
  const router = useRouter()

  useEffect(() => {
    const usernameJSON = localStorage.getItem('username');
    const username = usernameJSON ? JSON.parse(usernameJSON) : '';
    setUsername(username);
  }, []);

  return (
    <div className="flex justify-between m-3 mx-5">
      <Image src={Logo} alt="logo" height={30} />
      {
        isVisible && 
        (
        <div className="text-[#3f3f3fef] font-bold">
          <h2>{username}</h2>
          <button onClick={() => router.push(`/Profile`)}>Profile</button>
        </div>
        )
      }
   </div>
  )
}