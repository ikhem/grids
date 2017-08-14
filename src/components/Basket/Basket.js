import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLoans } from '../../ducks/reducer';
import { Well, Image } from 'react-bootstrap';

import './Basket.css';

class Basket extends React.Component {

  componentDidMount(){
    this.props.getLoans();
  }

  render(){
    console.log("From Basket: ", this.props.user.cart)
    console.log("Total: ", this.props.total);
    const { cart } = this.props.user;
    var res = []
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

    console.log("Result:", res);

    return(
      <Grid className="Basket">
        {
          res.map(loan => 
          <Well>
            <Image src={`http://www.kiva.org/img/h300w480/${loan.image.id}.jpg`} width={150} />
            <p>{loan.name}</p>
            <p>{loan.location.country}</p>
            <a href="">Remove</a>
          </Well>)
        }
        {
          this.props.user.cart.length ?
          <Row>
            <Col lg={12}>
              <p>Order Total:</p>{this.props.total}
              <p>Total due:</p>{this.props.total}
            </Col>
          </Row> :
          <Row>
            <Col lg={12}>
              <p>Your basket is empty, but we'd love to help you find a borrower to support.</p> 
             <Link to="#">Browse by category</Link> or <Link to="/Lend">see all loans</Link>   
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
    loans: state.loans,
    total: state.total
  }
}

export default connect(mapStateToProps, { getLoans })(Basket);