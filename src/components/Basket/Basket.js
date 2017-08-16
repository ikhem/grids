import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLoans, removeFromCart, updateCart } from '../../ducks/reducer';

import { Grid, Row, Col } from 'react-bootstrap';
import { Well, Image, Button } from 'react-bootstrap';
import { Step, Card, Menu, Dropdown } from 'semantic-ui-react';

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
        {
          cart.map(loan => {
            return(
              <Card fluid>
                <Image src={`http://www.kiva.org/img/h300w480/${loan.loan.image.id}.jpg`} width={150} />
                <Card.Header>
                  {loan.loan.name}
                </Card.Header>
                <Card.Meta>
                   {loan.loan.location.country} 
                </Card.Meta>
                <Card.Content extra>
                  <a onClick={ () => this.props.removeFromCart(loan.loan.id) }>Remove</a>
                </Card.Content>
                <Card.Content>
                  <Menu compact>
                    <Dropdown placeholder="$25" closeOnChange={true} options={options} item onChange={(e, value)=>{this.setValue(loan.loan.id, value)}}/>
                  </Menu>
                </Card.Content>
              </Card>
            )
          })
        } 
        <Well>
          <p>Order total: ${total}</p>
          <p>Total due: ${total}</p>
        </Well>
        {
          this.props.cart.length ?
          <Button bsSize="large" bsSize="primary"><Link to="/Payment">Continue</Link></Button> :
          null
        }
        <Link to="/Lend">Find more loans</Link>
      </Grid>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
    cart: state.cart,
    loans: state.loans,
  }
}

export default connect(mapStateToProps, { getLoans, removeFromCart, updateCart })(Basket);