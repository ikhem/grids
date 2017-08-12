import React from 'react';
import { Grid } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Basket.css';

class Basket extends React.Component {
  render(){
    return(
      <Grid className="Basket">
        <p>Your basket is empty, but we'd love to help you find a borrower to support.</p>
        <Link to="#">Browse by category</Link> or <Link to="/Lend">see all loans</Link>
      </Grid>
    )
  }
}

function mapStateToProps(state){
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Basket);