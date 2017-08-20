import React from 'react';

import { connect } from 'react-redux';
import { checkOut } from '../../ducks/reducer';
import axios from 'axios';

import { Grid, Panel } from 'react-bootstrap';
import { Step, Table } from 'semantic-ui-react'

import StripeCheckout from 'react-stripe-checkout';

import './Payment.css';

class Payment extends React.Component {

  onToken = (token) => {
    token.card = void 0;
    console.log('token', token);
    axios.post('http://localhost:3001/api/payment', { token, amount: 100}).then(response => {
      // this.props.checkOut( this.props.cart )
      this.props.history.push("/ThankYou")
    });
  }

  render(){
  let { cart } = this.props;
  console.log("cart: ", this.props);

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
        !this.props.cart ?
        <p>Your basket is empty.</p> :
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Item</Table.HeaderCell>
              <Table.HeaderCell>UnitPrice</Table.HeaderCell>
              <Table.HeaderCell>Qty</Table.HeaderCell>
              <Table.HeaderCell>Total</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
          {
          cart.map(loan => {
          return(
            <Table.Row verticalAlign='top'>
              <Table.Cell><p>{loan.loan.name}</p></Table.Cell>
              <Table.Cell><p>${loan.amount}</p></Table.Cell>
              <Table.Cell><p>1</p></Table.Cell>
              <Table.Cell><p>${loan.amount}</p></Table.Cell>
            </Table.Row>
            )
            })
          }
          </Table.Body>
        </Table>
      } 

      <Panel>
        <h3>Order total: ${total}</h3>
      </Panel>
      <Panel>
        <h2>Total due: ${total}</h2>
      </Panel>

      <Panel className="Continue">
      {
        this.props.user.authid ?
        <StripeCheckout
          token={this.onToken}
          stripeKey={ 'pk_test_pRHi3LdOP1wVPBXtN81dpSk3' }
          amount={total*100}
        /> :
        null
      }
      </Panel>

    </Grid>
  )
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
    cart: state.cart
  }
}

export default connect(mapStateToProps, { checkOut })(Payment);