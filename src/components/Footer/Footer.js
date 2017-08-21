import React from 'react';

import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Footer.css';

export default function Footer(){
  return (
    <Row className="Footer">
      <div className="Top-Nav-Bottom">
        <Link to="/">Barrow</Link>
        <Link to="/">About</Link>
        <Link to="/">Help</Link>
        <Link to="/">Careers</Link>
        <Link to="/">Site map</Link> 
      </div>

      <br/>

      <div className="Nav-bottom">
        <Link to="/">Privacy Policy</Link>
        <Link to="/">Terms of Use</Link>
      </div>

      <br />

      <div className="copyright">
        <p className="warning">Lending through Kiva involves risk of principle loss. Kiva does not guarantee repayment or offer a financial return on your loan.
        </p>
        <p>Kiva. All rights reserved.</p>
      </div>

    </Row>
  )
}