import React from 'react';

import { Link } from 'react-router-dom';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';

import Karousel from '../Karousel/Karousel';

import './Landing.css';

export default function Landing(){
  return (
    <Grid fluid={true}>

      <Karousel />

      <Row className="HowItWorks">
          <Row>
            <p><span className="HIW">How it works</span></p>
            <p><span className="title">Choose a borrower</span></p>
            <p><span className="description">Browse categories of borrowers--people looking to grow businesses, go to school, switch to clean energy and more.</span></p>
            <div className="repeat">
            <p><span className="title">Repeat!</span><br/><span className="description">Use the repayment to support another borrower, or withdraw your money.</span></p>
            <img width={350} height={300} alt="Cycle" src={require("./HowItWorks.png")} />
            <p><span className="title">Make a loan</span><br/><span className="description">Select a borrower who you connect with and help fund a loan with as little as $25.</span></p>
            </div>
            <p><span className="title">Get repaid</span></p>
            <p><span className="description">Receive updates on your loans and see the dollars return to your Kiva account.</span></p>

            <Link to="/about/how"><span className="description">Learn more about how Kiva works</span></Link>
          </Row>

          <Row className="Accolades">
            <Col lg={3} sm={6}><p>97.0%<br/><span className="desc">Loan repayment rate</span></p></Col>
            <Col lg={3} sm={6}><p>83<br/><span className="desc">Countries where Kiva works</span></p></Col>
            <Col lg={3} sm={6}><p>1.4 million<br/><span className="desc">People who've made a loan on kiva</span></p></Col>
            <Col lg={3} sm={6}><p>
              <Glyphicon glyph="star" />
              <Glyphicon glyph="star" />
              <Glyphicon glyph="star" />
              <Glyphicon glyph="star" />
              <br/><span className="desc">Charity Navigator's highest reward rating</span></p></Col>
          </Row>
      </Row>

      <Grid>
        <Row className="StartLending">
          {/* <Col lg={12}> */}
          <span className="Start"><p>Start Lending</p></span>
          <p><span className="Choose">Choose a category</span></p>
            <Icon size="massive" name="angle down" />
            <Row>
            <Col lg={3} md={4} sm={6} className="Search"><p><input /><span className="desc">Search</span></p></Col>
            <Col lg={3} md={4} sm={6} className="Women" href=""><Link to="">Women</Link></Col>
            <Col lg={3} md={4} sm={6} className="Agriculture" href=""><Link to="">Agriculture</Link></Col>
            <Col lg={3} md={4} sm={6} className="Education" href=""><Link to="">Education</Link></Col>

            <Col lg={3} md={4} sm={6} className="Health" href=""><Link to="">Health</Link></Col>
            <Col lg={3} md={4} sm={6} className="SingleParents" href=""><Link to="">Single Parents</Link></Col>
            <Col lg={3} md={4} sm={6} className="Refugees" href=""><Link to="">Refugees and IDPs</Link></Col>
            <Col lg={3} md={4} sm={6} className="Shelter" href=""><Link to="">Shelter</Link></Col>
        
            <Col lg={3} md={4} sm={6} className="Food" href=""><Link to="">Food</Link></Col>
            <Col lg={3} md={4} sm={6} className="KivaUSA" href=""><Link to="">Kiva U.S.</Link></Col>
            <Col lg={3} md={4} sm={6} className="Expiring" href=""><Link to="">Expiring Soon</Link></Col>
            <Col lg={3} md={4} sm={6} className="All" href=""><Link to="">All Loans</Link></Col>
            </Row>
            {/* </Col> */}
        </Row>
      </Grid>

      <Row className="Social">
        <p>Follow us</p> 
        <a href="https://www.facebook.com/kiva"><Icon link circular name="facebook square" size="massive" /></a>
        <a href="https://twitter.com/Kiva"><Icon link circular name="twitter" size="massive" /></a>
        <a href="https://www.youtube.com/user/kiva"><Icon link circular name="youtube square" size="massive" /></a>
        <a href="https://www.linkedin.com/company/266361"><Icon link circular name="linkedin square" size="massive" /></a>
        <a href="https://www.instagram.com/kiva_microloans/"><Icon link circular name="instagram" size="massive" /></a>
      </Row>

      <Row className="BottomPic">
        <p><span>"Kiva is a simple concept that<br/>that can change a person's life."</span><br/> - Oprah Winfrey</p>
      </Row> 

    </Grid>    
  )
}