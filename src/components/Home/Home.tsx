import React, { FC } from 'react';

export const Home: FC = () => {
  return (
    <div className="header__home home">
      <h1 className="home__title">{'One-step sign-up & identification'}</h1>
      <p className="home__desc">
        A new dawn and invention for sign-ups and identification, worldwide. An
        exciting, easy to use invention by BGC Global Partners LLC{' '}
        <span>
          For use on mobile and web applications and desktop platforms.
        </span>
      </p>
      <h3 className="home__subtitle">
        Experience the uniqueness of one-step sign ups and identification at
        these various global platforms…
      </h3>

      <button type="button" className="home__btn">
        Lear more
      </button>
    </div>
  );
};
