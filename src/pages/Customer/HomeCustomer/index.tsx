import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import data from '../../../mock/index.json';
import CardProperty from '@/components/CardProperty';

export default function HomeCustomer() {
  const [filter, setFilter] = useState(''); // estado para armazenar as opções de filtro

  const handleFilterChange = (value: any) => {
    setFilter(value); // atualiza o estado de filtro
  };

  


  const filteredData = data.filter((item) => {
    // verifica se o valor da propriedade categoria ou description contém a string de filtro
    return item.categoria.toLowerCase().includes(filter.toLowerCase()) ||
           item.description.toLowerCase().includes(filter.toLowerCase()) ||
           item.details[0].toLowerCase().includes(filter.toLowerCase());
  });

  const categories = [
    'Vistas incríveis',
    'No interior',
    'Em frente à praia',
    'Acampamentos',
    'Praia',
    // todo: verificar as outras categorias e colocar aqui
  ];

  return (
    <div>
      <Header />
      <input
        type="text"
        placeholder="Pesquisar"
        onChange={(e) => handleFilterChange(e.target.value)}
      />

{categories.map((category) => (
      <button key={category} onClick={() => handleFilterChange(category)}>
        {category}
      </button>
    ))}

      {filteredData.map((item, index) => (
        <CardProperty
          key={index}
          url={`http://localhost:3002/Customer/DetailsPropertyCustomer/${index}`}
          index={index}
          title={item.title}
          img1={item.img1}
        />
      ))}
    </div>
  );
}