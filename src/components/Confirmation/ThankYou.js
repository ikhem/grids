import React from 'react';

import { connect } from 'react-redux';

import { Grid } from 'react-bootstrap';

import './ThankYou.css';

class ThankYou extends React.Component {

  render(){
    return(
      <Grid className="Confirmation">
        <h1>Order Confirmed</h1>

        <h3>{`${this.props.user.firstname} ${this.props.user.lastname}`}</h3>
      </Grid>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
    cart: state.cart
  }
}

export default connect(mapStateToProps)(ThankYou);