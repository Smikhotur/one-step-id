import React, { FC } from 'react';
import { Header } from './components/Header';
import './assets/scss/style.scss';

export const App: FC = () => {
  return (
    <div className="App">
      <Header />
    </div>
  );
};
