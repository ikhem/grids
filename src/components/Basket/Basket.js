import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLoans, removeFromCart, fundLoan } from '../../ducks/reducer';
import { Well, Image, Button } from 'react-bootstrap';
import { Step, Card, Menu, Dropdown } from 'semantic-ui-react';

import './Basket.css';

const options = [
  { key: 1, text: '$25', value: 25 },
  { key: 2, text: '$50', value: 50 },
  { key: 3, text: '$75', value: 75 },
  { key: 4, text: '$100', value: 100 }
]

class Basket extends React.Component {

  componentDidMount(){
    this.props.getLoans();
  }

  setValue(e, data) {
    this.setState({
      total: [...data.value]
    })
  }

  render(){
    let { cart } = this.props.user;
    // console.log("Props: ", this.props);

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
              <Card key={loan.id} fluid>
                <Image src={`http://www.kiva.org/img/h300w480/${loan.image.id}.jpg`} width={150} />
                <Card.Header>
                  {loan.name}
                </Card.Header>
                <Card.Meta>
                  {/* {loan.location.country} */}
                  Funded Amount: {loan.funded_amount}
                </Card.Meta>
                <Card.Content extra>
                  <a onClick={ () => this.props.removeFromCart(loan.id) }>Remove</a>
                </Card.Content>
                <Card.Content>
                  <Menu compact>
                    <Button onClick={ () => this.props.fundLoan(loan.id,25)} />
                    {/* <Dropdown
                      onChange={this.props.fundLoan(loan.id, 25)}
                      options={options}
                      placeholder="$25" 
                      search selection
                      value={this.props.total} 
                    /> */}
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
    loans: state.loans,
    total: state.total
  }
}

export default connect(mapStateToProps, { getLoans, removeFromCart, fundLoan })(Basket);