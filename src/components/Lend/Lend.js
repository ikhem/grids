import React from 'react';
import { connect } from 'react-redux';
import { getLoans } from '../../ducks/reducer';
import { Card , Icon, Image, Progress } from 'semantic-ui-react';

class Lend extends React.Component {
  
  componentDidMount(){
    this.props.getLoans();
  }

  render(){
    return(
      <div>
      <h1>Loans</h1>
      <Card.Group>
      {!this.props.loans ? null : 
        this.props.loans.loans.map(loan => {
          return (
            <Card>
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
                <Progress total={loan.funded_amount} color='green'>sdf</Progress>
              </Card.Content>
            </Card> 
          )
        })
      }
      </Card.Group>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    loans: state.loans
  }
}

export default connect(mapStateToProps, { getLoans })(Lend);