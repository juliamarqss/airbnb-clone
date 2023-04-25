import React from 'react';
import Image from 'next/image';

function CardPayment() {
  return (
    <div>
      <span>
      <p>Pagar com:</p>
      <Image src="https://www.melhoresdestinos.com.br/wp-content/uploads/2020/02/bandeiras-3-820x152.png" alt="bandeiras" width="100px" height="25px" />
      </span>
      <input type="text" placeholder="Número do cartão" />
      <input type="text" placeholder="Código de segurança" />
      </div>
  );
}

export default CardPayment;