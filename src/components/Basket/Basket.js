import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLoans, removeFromCart, updateCart } from '../../ducks/reducer';

import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { Well, Image } from 'react-bootstrap';
import { Step, Card, Menu, Dropdown, Item, Button } from 'semantic-ui-react';

import './Basket.css';
import '../Step.css';

const options = [
  { key: 25, text: '$25', value: 25},
  { key: 50, text: '$50', value: 50},
  { key: 75, text: '$75', value: 75},
  { key: 100, text: '$100', value: 100}
]

class Basket extends React.Component {
  constructor(props){
    super(props)
    // Sets the value for the drop down box
    this.setValue = this.setValue.bind(this);
  }

  componentDidMount(){
    this.props.getLoans();
  }

  setValue(e, data) {
    this.props.updateCart(e, data.value)
  }

  render(){
    let { cart } = this.props;
    console.log("cart: ", cart);

    let total = 0;
    
    this.props.cart.map(item => {
      total = total + Number(item.amount)
    })

    return(
      <Grid className="Basket">
        <Step.Group fluid>

          <Step active>
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
        <Item.Group divided>
        {
          cart.map(loan => {
            return(
              <Item>
                <Item.Image size="small" src={`http://www.kiva.org/img/h300w480/${loan.loan.image}.jpg`} />

                <Card.Content extra>
                  <Item.Header>{loan.loan.name}</Item.Header>
                  <Item.Meta>{loan.loan.country}</Item.Meta>
                </Card.Content>
                <Card.Content extra>
                </Card.Content>
                <Card.Content>
                  <Menu compact>
                    <Dropdown placeholder="$25" closeOnChange={true} options={options} item onChange={(e, value)=>{this.setValue(loan.loan.id, value)}}/>
                 </Menu>
                 <a onClick={ () => this.props.removeFromCart(loan.loan.id) }>Remove</a> 
                </Card.Content>

              </Item>
            )
          })
        } 
        </Item.Group>

        <Panel>
          <h3>Order total: ${total}</h3>
        </Panel>
        <Panel>
          <h2>Total due: ${total}</h2>
        </Panel>
        
        <Panel className="Continue">
        {
          this.props.cart.length ?
          <Button size="massive" color="blue"><Link to="/Payment" onClick={this.loggedIn}>Continue</Link></Button> :
          null
        }
        </Panel>
        <Panel>
        <h3><Link to="/Lend">Find more loans</Link></h3>
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

export default connect(mapStateToProps, { getLoans, removeFromCart, updateCart })(Basket);