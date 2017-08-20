import React from 'react';

import { connect } from 'react-redux';
import { getLoans, addToCart } from '../../ducks/reducer';

import { Card, Image, Progress, Button, Loader } from 'semantic-ui-react';
import { Grid, Row, Col } from 'react-bootstrap';

import './Lend.css';

class Lend extends React.Component {
  
  componentDidMount(){
    this.props.getLoans();
  }

  render(){
    console.log("Loans:", this.props.loans)
    return(
      <Grid className="Lend" fluid="false">
        <Row>

          <Col lg={2}>
            <p>Borrowers</p>
            <div className="ui two buttons">
              <Button basic color="green" size="large">Men</Button>
              <Button basic color="green" size="large">Women</Button>
            </div>

            <div className="ui two buttons">
              <Button basic color="black" size="large">Individual</Button>
              <Button basic color="black" size="large">Group</Button>
            </div>

          </Col>

          <Col lg={10}>
            {/* <h1>Loans</h1> */}
            <Card.Group>
            {
              // If loans don't exist show loading else show the cards of loans
              !this.props.loans ?  
              <Loader active inline='centered' /> : 
              this.props.loans.map(loan => {
                return (
                  <Card>

                    <Image src={`http://www.kiva.org/img/h300w480/${loan.image}.jpg`} />

                    <Card.Content>
                      <Card.Header>
                        <span className="LoanTitle">
                          {loan.name}
                        </span>
                      </Card.Header>
                      <Card.Meta>
                        {loan.country}
                      </Card.Meta>
                      <Card.Description>
                        A Loan of ${loan.loan_amount} helps {loan.use}
                      </Card.Description>
                    </Card.Content>

                    <Card.Content extra>
                      <Progress value={loan.funded_amount} total={loan.loan_amount} label={`$`+(loan.loan_amount-loan.funded_amount)+' to go'} color='green'/>  
                    </Card.Content>

                    <Card.Content extra>
                      <div className="ui two buttons">
                        <Button fluid onClick = { () => this.props.addToCart(loan, 25) } color="green" size="large">Lend $25</Button>
                        <Button fluid inverted color="green" size="large">Learn More</Button>
                      </div>
                    </Card.Content>
                  </Card> 
                )
              })
            }
            </Card.Group>

            <Button size="massive" color="blue" disabled>{'<'}</Button>
            <Button size="massive" color="blue" >{'>'}</Button>

          </Col>

        </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state){
  return {
    loans: state.loans,
    // cart: state.cart
  }
}

export default connect(mapStateToProps, { getLoans, addToCart })(Lend);