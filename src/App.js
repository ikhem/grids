import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Karousel from './components/Karousel/Karousel';
import Navigation from './components/Header/Navigation';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Grid fluid="false">
        <Navigation />
        <Karousel />
        {/* <Row>
          <Col lg={6}><img alt="img1l" src={require("./img/hp-slideshow-l1-med-std_0.jpg")} /></Col>
          <Col lg={6}><img alt="img1r" src={require("./img/hp-slideshow-r1-med-std_0.jpg")} /></Col> 
        </Row> */}
         <Row className="HowItWorks">
          <Col lg={12}>
            <Row>
              <h1>InfoGraphic</h1>
            </Row>
            <Row>
              <Col lg={3} sm={6}><p>97.0% Loan repayment rate</p></Col>
              <Col lg={3} sm={6}><p>83 Countries where Kiva works</p></Col>
              <Col lg={3} sm={6}><p>1.4mil People who've made a loan on kiva</p></Col>
              <Col lg={3} sm={6}><p>4stars Charity Navigator's highest reward rating</p></Col>
            </Row>
          </Col>
        </Row>
        <Row className="StartLending">
          <Col lg={12}>
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
           </Col>
        </Row>
        <Row className="FollowUs">
          <h1>Follow us</h1>
          <Col lg={2}>Facebook</Col>
          <Col lg={2}>Twitter</Col>
          <Col lg={2}>YouTube</Col>
          <Col lg={2}>LinkedIn</Col>
          <Col lg={2}>Instgram</Col>
        </Row>
        <Row className="FooterPic">
          <p><span>"Kiva is a simple concept that<br/>that can change a person's life."</span><br/> - Oprah Winfrey</p>
        </Row> 
        <Footer />
      </Grid>
    );
  }
}

export default App;
