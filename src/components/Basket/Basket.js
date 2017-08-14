import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLoans } from '../../ducks/reducer';
// import { Image } from 'semantic-ui-react';

import './Basket.css';

class Basket extends React.Component {

  componentDidMount(){
    this.props.getLoans();
  }

  render(){
    console.log("From Basket: ", this.props.user.cart)
    // console.log("From Loans: ", this.props.loans)
    // console.log("From Loans: ", this.props.loans.loans)
    const { cart } = this.props.user;
    // const { loans } = this.props.loans;
          let res = []
    if(this.props.loans) {

      console.log("From Loans:", this.props.loans)
      this.props.loans.loans.forEach((el1) => {
        cart.forEach((el2) => {
            if(el2.loanid == el1.id){
                res.push(el1)
            }
        })
      })
    }

    // console.log(res);

    return(
      <Grid className="Basket">
        {
          this.props.user.cart.length ?
          <Row>
            <Col lg={12}>
             {/* {JSON.stringify(this.props.loans)}  */}
              {JSON.stringify(res)}  
            </Col>
          </Row> :
          <Row>
            <Col lg={12}>
              <p>Your basket is empty, but we'd love to help you find a borrower to support.</p> 
             <Link to="#">Browse by category</Link> <Link to="/Lend">see all loans</Link>   
            </Col>
          </Row>
        }
      </Grid>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
    loans: state.loans
  }
}

export default connect(mapStateToProps, { getLoans })(Basket);