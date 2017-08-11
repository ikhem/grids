import React from 'react';
import { connect } from 'react-redux';
import { getLoans } from '../../ducks/reducer';
import { Card, Image, Progress, Button, Loader, Menu } from 'semantic-ui-react';

import { Grid, Row, Col } from 'react-bootstrap';

import './Lend.css';

class Lend extends React.Component {
  
  componentDidMount(){
    this.props.getLoans();
  }

  render(){
    console.log(this.props.loans)
    return(
      <Grid fluid='false'>
        <Row>
          <Col lg={2}>
          <h1>Menu</h1>
          <Menu vertical>
            <Menu.Item>
              Inbox
            </Menu.Item>
          </Menu>
          
          </Col>
          <Col lg={10}>
        <h1>Loans</h1>
      <Card.Group>
      {!this.props.loans ?  <Loader active inline='centered' /> : 
        this.props.loans.loans.map(loan => {
          return (
            <Card>
              <Image src={`http://www.kiva.org/img/h300w480/${loan.image.id}.jpg`} />
              <Card.Content>
                <Card.Header>
                  {loan.name}
                </Card.Header>
                <Card.Meta>
                  {loan.location.country}
                </Card.Meta>
                <Card.Description>
                  A Loan of ${loan.loan_amount} helps {loan.use}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Progress value={loan.funded_amount} total={loan.loan_amount} label={`$`+(loan.loan_amount-loan.funded_amount)+' to go'} color='green' progress='percent' />  
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color="green">Lend $25</Button>
                  <Button basic color="green">Learn More</Button>
                </div>
              </Card.Content>
            </Card> 
          )
        })
      }
      </Card.Group>
        </Col>
      </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state){
  return {
    loans: state.loans
  }
}

export default connect(mapStateToProps, { getLoans })(Lend);