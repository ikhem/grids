import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkOut } from '../../ducks/reducer';

import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { Step, Card, Table, Button } from 'semantic-ui-react'

import './Payment.css';

class Payment extends React.Component {

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
              <Table.Cell><h4>{loan.loan.name}</h4></Table.Cell>
              <Table.Cell>${loan.amount}</Table.Cell>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>${loan.amount}</Table.Cell>
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
        <Button size="massive" color="blue" onClick={ () => this.props.checkOut( this.props.cart )}><Link to="/ThankYou" onClick={this.loggedIn}>Continue</Link></Button> :
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