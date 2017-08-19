import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../../ducks/reducer';
import './Portfolio.css';

import { Grid, Row, Col, Navbar, NavItem, Nav } from 'react-bootstrap';
import { Card, Image, Progress, Button, Divider } from 'semantic-ui-react';

class Portfolio extends React.Component {

  componentDidMount(){
    this.props.getUser();
  }

  render() {
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
        <Grid className="profile" fluid="true">
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
                <p>Outstanding Loans</p>

                <button><Link to='/Lend'>Find a Loan</Link></button>

                <Divider />

                <p><span className="sumOutstanding">Recent Loans</span></p>
                <Card.Group>
                {
                  this.props.loansOutstanding ?
                  this.props.loansOutstanding.map(loan => {
                    return (
                      <Card>
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