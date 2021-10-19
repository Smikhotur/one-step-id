import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { About } from '../About';
import { Footer } from '../Footer';
import { Home } from '../Home';
import { Nav } from './Nav';

export const Header: FC = () => {
  return (
    <section className="header">
      <header className="header__menu">
        <Nav />
      </header>
      <main className="header__wrapper">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/invention"></Route>
          <Route path="/faq"></Route>
          <Redirect to="/home" />
        </Switch>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </section>
  );
};
