import React from 'react';
import { connect } from 'react-redux';
import { getLoans } from '../../ducks/reducer';

class Lend extends React.Component {
  
  componentDidMount(){
    this.props.getLoans();
  }

  render(){
    return(
      <div>
      <h1>Loans</h1>
      {!this.props.loans ? null : 
        this.props.loans.loans.map(loan => {
          return (
            <div>
              <p>{loan.image.id}</p>
              <p>Purpose: {loan.activity}</p>
              <p>Name: {loan.name}</p>
            </div>
          )
        })
      }
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