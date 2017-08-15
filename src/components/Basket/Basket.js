import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLoans, removeFromCart } from '../../ducks/reducer';
import { Well, Image, Button } from 'react-bootstrap';
import { Step, Card, Menu, Dropdown } from 'semantic-ui-react';

import './Basket.css';

class Basket extends React.Component {

  componentDidMount(){
    this.props.getLoans();
  }

  render(){
    let { cart } = this.props;
    console.log("cart: ", cart);

    return(
      <Grid className="Basket">
        <Step.Group fluid>

          <Step>
            <Step.Content>
              <Step.Title>My Basket</Step.Title>
            </Step.Content>
          </Step>

          <Step>
            <Step.Content>
              <Step.Title>Review & pay</Step.Title>
            </Step.Content>
          </Step>

          <Step>
            <Step.Content>
              <Step.Title>Thank You</Step.Title>
            </Step.Content>
          </Step>

        </Step.Group>
        {
          cart.map(loan => {
            return(
              <Card fluid>
                <Image src={`http://www.kiva.org/img/h300w480/${loan.image.id}.jpg`} width={150} />
                <Card.Header>
                  {loan.name}
                </Card.Header>
                <Card.Meta>
                   {loan.location.country} 
                </Card.Meta>
                <Card.Content extra>
                  <a onClick={ () => this.props.removeFromCart(loan.id) }>Remove</a>
                </Card.Content>
                <Card.Content>
                  <Menu compact>
                    <Button onClick={ () => this.props.fundLoan(loan.id,25)}>Fund $25</Button>
                  </Menu>
                </Card.Content>
              </Card>
            )
          })
        } 
        <Well>
          <p>Order total: {this.props.total}</p>
          <p>Total due: {this.props.total}</p>
        </Well>
      </Grid>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
    cart: state.cart,
    loans: state.loans,
    total: state.total
  }
}

export default connect(mapStateToProps, { getLoans, removeFromCart })(Basket);