import React from 'react';
import Header from '../Header/Header';
import s from './Layout.module.scss';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={s.wrapper}>
      <Header />
      <div className={s.main}>{children}</div>
    </div>
  );
};

export default MainLayout;
