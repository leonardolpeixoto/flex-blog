import React from 'react';

import InfoHeader from '../../components/InfoHeader';
import Header from '../../components/Header';
import sobre1 from './img/sobre1.jpg';
import sobre2 from './img/sobre2.jpg';

const Home = () => {
  return (
    <div>
      <InfoHeader 
        expedient='Seg/Sex - 08:00 às 18:00'
        phone={{number: '+552199999999', formatted: '+55 (21) 9999-9999'}}
        address='Av. Ali Perto, 330, Botafogo - RJ'
        />
      <Header/>
      <h1 className='introducao'>Novos valores e<br/>Propriedades de CSS</h1>
      <section class='sobre' id='sobre'>
        <div className='sobre-info'>
          <h1>Sobre</h1>  
        </div>
        <div className='sobre-img'>
          <img src={sobre1} alt='Sobre 1'/>
        </div>
        <div className='sobre-img'>
          <img src={sobre2} alt='Sobre 3'/>
        </div>
      </section>
    </div>
  );
};

export default Home;