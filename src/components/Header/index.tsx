import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Logo from '@/images/logo.png'

export default function Header() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const usernameJSON = localStorage.getItem('username');
    const username = usernameJSON ? JSON.parse(usernameJSON) : '';
    setUsername(username);
  }, []);

  return (
    <div>
      <Image src={Logo} alt="logo" height={30} />
      <h2>{username}</h2>
    </div>
  )
}