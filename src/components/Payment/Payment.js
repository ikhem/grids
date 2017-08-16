import React from 'react';

import { connect } from 'react-redux';

import { Grid, Row, Col } from 'react-bootstrap';
import { Well, Image, Button } from 'react-bootstrap';
import { Step, Card, Menu, Dropdown } from 'semantic-ui-react'

import './Payment.css';

class Payment extends React.Component {
  render(){
  let { cart } = this.props;
  console.log("cart: ", cart);

  let total = 0;
  
  this.props.cart.map(item => {
    total = total + Number(item.amount)
  })

  return(
    <Grid className="Payment">
      <Step.Group fluid>

        <Step active>
          <Step.Content>
            <Step.Title>My Basket</Step.Title>
          </Step.Content>
        </Step>

        <Step active>
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
        this.props.cart ?
        <p>Your basket is empty.</p> :
        cart.map(loan => {
          return(
            <Card fluid>
              <Card.Header>
                {loan.loan.name}
              </Card.Header>
            </Card>
          )
        })
      } 

      <Well>
        <p>Order total: {total}</p>
        <p>Total due: {total}</p>
      </Well>

      <Button bsSize="large" bsSize="primary">Continue</Button>
    </Grid>
  )
  }
}

function mapStateToProps(state){
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Payment);