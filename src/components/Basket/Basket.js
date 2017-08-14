import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import { Image } from 'semantic-ui-react';

import './Basket.css';

class Basket extends React.Component {
  render(){
    console.log("From Basket: ", this.props.user.cart)
    console.log("From Loans: ", this.props.loans.loans)
    let { cart } = this.props.user;
    let { loans } = this.props.loans;

    // console.log("cart: ", cart);
    // console.log("loans: ", loans);

    // let array = cart.map(item => {
    //   return item.loanid
    // })

    // let array2 = loans.filter((loan, i) => {
    //   return 
    // })

    // console.log(array2);

    let res = []
    loans.forEach((el1) => {
        cart.forEach((el2) => {
            if(el2.loanid == el1.id){
                res.push(el1)
            }
        })
    })

    console.log(res);

    return(
      <Grid className="Basket">
        {
          this.props.user.cart.length ?
          <Row>
            {JSON.stringify(res)}
          </Row> :
          <Row>
            <p>Your basket is empty, but we'd love to help you find a borrower to support.</p>
            <Link to="#">Browse by category</Link> or <Link to="/Lend">see all loans</Link>
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

export default connect(mapStateToProps)(Basket);