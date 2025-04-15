import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '10px',
      }}>
      <h1 style={{ fontSize: '30px', fontWeight: '600', marginBottom: '30px' }}>
        Добро пожаловать в учебный центр «ЭдуКонсалт»!
      </h1>
      <p style={{ fontSize: '20px' }}>
        Обучение нового поколения — наша миссия и цель. Мы предлагаем качественные образовательные
        услуги, направленные на развитие профессиональных компетенций, повышение квалификации
        специалистов и подготовку будущих лидеров рынка труда.
      </p>
      <Link
        style={{
          borderRadius: '6px',
          backgroundColor: 'blue',
          padding: '4px 10px',
          color: 'white',
        }}
        to={'/courses'}>
        Перейти к курсам
      </Link>
    </div>
  );
};

export default Home;
