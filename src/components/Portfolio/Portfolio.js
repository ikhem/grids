import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../../ducks/reducer';
import './Portfolio.css';

import { Grid, Row, Navbar, NavItem, Nav } from 'react-bootstrap';
import { Card, Image, Divider, Button } from 'semantic-ui-react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={2}
    defaultCenter={{ lat: 42, lng: 23 }}
    onClick={props.onMapClick}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
      />
    ))}
  </GoogleMap>
));

class Portfolio extends React.Component {

  componentDidMount(){
    this.props.getUser();
  }

  render() {
    
    // Get the map markers from outstanding loans
    let markers = this.props.loansOutstanding.map(item => {
      return { position: { "lat": item.long, "lng" : item.lat } }
    })

    return (
      <div>
        <Navbar collapseOnSelect className="NavProfile">
          <Nav>
          <NavItem>Portfolio</NavItem>
          <NavItem>My teams</NavItem>
          <NavItem>Messages</NavItem>
          <NavItem>Settings</NavItem>
          </Nav>
        </Navbar>
        <Grid className="profile" fluid={false}>
          <Row>
            {/* <Col lg={2}>
            </Col>
            <Col lg={10}> */}

              {this.props.loading ? <h1>Loading</h1> : 
              <div>

                {
                  this.props.user.firstname ?
                  <p className="name">{`${this.props.user.firstname} ${this.props.user.lastname}`} </p> :
                  <p className="name">{`${this.props.user.nickname}`} </p>
                }

                <p><span className="sumOutstanding">${this.props.sumOutstanding}</span></p>
                <p className="underTag">Outstanding Loans</p>

                <div className="FindALoan">
                  <Button size="massive" color="blue"><Link to="/Lend" onClick={this.loggedIn}>Find a Loan</Link></Button>
                </div>

                <Divider />

                <p><span className="sumOutstanding">Recent Loans</span></p>
                <Card.Group>
                {
                  this.props.loansOutstanding ?
                  this.props.loansOutstanding.map(loan => {
                    return (
                      <Card key={loan.id}>
                        <Image src={`http://www.kiva.org/img/h300w480/${loan.image}.jpg`} />
                      <Card.Content>
                      <Card.Header>
                        {loan.name}
                      </Card.Header>
                      <Card.Meta>
                        {loan.country}
                      </Card.Meta>
                      </Card.Content>
                      Paying back
                    </Card> 
                  )
                }) :
                <p></p>
                }
                </Card.Group>
              </div>
              }
            {/* </Col> */}
          </Row>
          <Row style={{height: `100%`, width: `100%`, 'padding-top': '30px'}}>
            <GettingStartedGoogleMap
              containerElement={
                <div style={{ height: `550px` }} />
              }
              mapElement={
                <div style={{ height: `550px`, width: `100%` }} />
              }
              onMapLoad={this.handleMapLoad}
              onMapClick={this.handleMapClick}
              markers={markers}
              onMarkerRightClick={this.handleMarkerRightClick}
            />
          </Row>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    loading: state.loading,
    sumOutstanding: state.sumOutstanding,
    loansOutstanding: state.loansOutstanding
  }
}

export default connect(mapStateToProps, { getUser })(Portfolio);