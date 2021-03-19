import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import ReactWhatsapp from 'react-whatsapp';
import './principal.css';

function Principal() {
  var date = new Date();
  // const horaAtual = date.getHours();

  const [tel, setTel] = useState('');
  const [msg, setMsg] = useState('');
  return (

    <form  className="teste">
      <div className="input-block">
        <label htmlFor="tel">Telefone para contato</label>
        <textarea
          id="tel"
          value={tel}
          onChange={event => setTel(event.target.value)}
        />
      </div>
      <div className="input-block">
        <label htmlFor="tel">Mensagem</label>
        <textarea
          id="tel"
          value={msg}
          onChange={event => setMsg(event.target.value)}
        />
      </div>
      <div className="wppSymbol">
        <FaWhatsapp size={20} color="#FFF" />
        Entrar em contato
      <div className="buttonWpp">
          <ReactWhatsapp
            element="button"
            number={tel}
            message={msg}
          
          />
        </div>
      </div>
    </form>

  );
}

export default Principal;