import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Karousel from '../Karousel/Karousel';
import './Landing.css';

export default function Landing(){
  return (
    <Grid fluid="false">
      <Karousel />
      {/* <Row>
        <Col lg={6}><img alt="img1l" src={require("./img/hp-slideshow-l1-med-std_0.jpg")} /></Col>
        <Col lg={6}><img alt="img1r" src={require("./img/hp-slideshow-r1-med-std_0.jpg")} /></Col> 
      </Row> */}
      <Row className="HowItWorks">
          <Row>
            <h1>InfoGraphic</h1>
          </Row>
          <Row className="Accolades">
            <Col lg={3} sm={6}><p>97.0% <br/> Loan repayment rate</p></Col>
            <Col lg={3} sm={6}><p>83 <br/> Countries where Kiva works</p></Col>
            <Col lg={3} sm={6}><p>1.4 million <br/> People who've made a loan on kiva</p></Col>
            <Col lg={3} sm={6}><p>4stars <br/> Charity Navigator's highest reward rating</p></Col>
          </Row>
      </Row>
      <Row className="StartLending">
        {/* <Col lg={12}> */}
        <h1>Start Lending</h1>
        <p>Choose a category</p>
          <Row>
          <Col lg={3} md={4} sm={6}><p>Search</p></Col>
          <Col lg={3} md={4} sm={6}><p>Women</p></Col>
          <Col lg={3} md={4} sm={6}><p>Agriculture</p></Col>
          <Col lg={3} md={4} sm={6}><p>Education</p></Col>

          <Col lg={3} md={4} sm={6}><p>Health</p></Col>
          <Col lg={3} md={4} sm={6}><p>Single Parents</p></Col>
          <Col lg={3} md={4} sm={6}><p>Refugees and IDPs</p></Col>
          <Col lg={3} md={4} sm={6}><p>Shelter</p></Col>
      
          <Col lg={3} md={4} sm={6}><p>Food</p></Col>
          <Col lg={3} md={4} sm={6}><p>Kiva U.S.</p></Col>
          <Col lg={3} md={4} sm={6}><p>Expiring Soon</p></Col>
          <Col lg={3} md={4} sm={6}><p>All Loans</p></Col>
          </Row>
          {/* </Col> */}
      </Row>
      <Row className="FollowUs">
        <h1>Follow us</h1>
        <Col lg={2}>Facebook</Col>
        <Col lg={2}>Twitter</Col>
        <Col lg={2}>YouTube</Col>
        <Col lg={2}>LinkedIn</Col>
        <Col lg={2}>Instgram</Col>
      </Row>
      <Row className="BottomPic">
        <p><span>"Kiva is a simple concept that<br/>that can change a person's life."</span><br/> - Oprah Winfrey</p>
      </Row> 
    </Grid>    
  )
}