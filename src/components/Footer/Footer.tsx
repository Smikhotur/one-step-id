import React, { FC } from 'react';

export const Footer: FC = () => {
  return (
    <div className="footer__wrapper">
      <div className="footer__copy">
        Privacy Police
        <span className="footer__line"></span>
      </div>
      <div className="footer__copy">
        Use cookies
        <span className="footer__line"></span>
      </div>
      <div className="footer__copy">
        Terms of Use
        <span className="footer__line"></span>
      </div>
      <div className="footer__copy">Conditions</div>
    </div>
  );
};
