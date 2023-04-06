import React, { useState, useEffect } from 'react'
import { fetchAll } from '@/API/fetch';


export default function Profile () {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const usernameJSON = localStorage.getItem('username');
  const username = usernameJSON ? JSON.parse(usernameJSON) : '';

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetchAll(`http://localhost:3000/users/${username}`);
        console.log("response", response);
        setData(response);
      } catch (error) {
        console.log('azedou maluco:', error)
      }
      setLoading(false);
    };
    fetchData();
  }, [username]);

  return (
    <div>
      <h1>Profile</h1>
      {loading && <p>Loading...</p>}
      {!loading && data && (
        <div>
          <p>Nome: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>CPF: {data.cpf}</p>
          <p>Celular: {data.phone}</p>
          <p>Endereço: {data.address}</p>
        </div>
      )}
    </div>
  );
}