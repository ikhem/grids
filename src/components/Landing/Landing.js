import React from 'react';

import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';

import Karousel from '../Karousel/Karousel';

import './Landing.css';

export default function Landing(){
  return (
    <Grid fluid="false">

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

            <a href="/about/how">Learn more about how Kiva works</a>
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
            <Col lg={3} md={4} sm={6} className="Search"><p><input /><br/>Search</p></Col>
            <Col lg={3} md={4} sm={6} className="Women" href=""><a href="">Women</a></Col>
            <Col lg={3} md={4} sm={6} className="Agriculture" href=""><a href="">Agriculture</a></Col>
            <Col lg={3} md={4} sm={6} className="Education" href=""><a href="">Education</a></Col>

            <Col lg={3} md={4} sm={6} className="Health" href=""><a href="">Health</a></Col>
            <Col lg={3} md={4} sm={6} className="SingleParents" href=""><a href="">Single Parents</a></Col>
            <Col lg={3} md={4} sm={6} className="Refugees" href=""><a href="">Refugees and IDPs</a></Col>
            <Col lg={3} md={4} sm={6} className="Shelter" href=""><a href="">Shelter</a></Col>
        
            <Col lg={3} md={4} sm={6} className="Food" href=""><a href="">Food</a></Col>
            <Col lg={3} md={4} sm={6} className="KivaUSA" href=""><a href="">Kiva U.S.</a></Col>
            <Col lg={3} md={4} sm={6} className="Expiring" href=""><a href="">Expiring Soon</a></Col>
            <Col lg={3} md={4} sm={6} className="All" href=""><a href="">All Loans</a></Col>
            </Row>
            {/* </Col> */}
        </Row>
      </Grid>

      <Row className="Social">
        <p>Follow us</p> 
        <Icon link circular name="facebook square" size="huge" />
        <Icon link circular name="twitter" size="huge" />
        <Icon link circular name="youtube square" size="huge" />
        <Icon link circular name="linkedin square" size="huge" />
        <Icon link circular name="instagram" size="huge" />
      </Row>

      <Row className="BottomPic">
        <p><span>"Kiva is a simple concept that<br/>that can change a person's life."</span><br/> - Oprah Winfrey</p>
      </Row> 

    </Grid>    
  )
}