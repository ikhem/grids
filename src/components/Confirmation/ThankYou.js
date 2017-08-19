import React from 'react';

import { connect } from 'react-redux';

import { Grid, Panel } from 'react-bootstrap';
import { Table } from 'semantic-ui-react';

import { checkOut } from '../../ducks/reducer';

import './ThankYou.css';

class ThankYou extends React.Component {

  componentWillMount(){
    this.props.checkOut( this.props.cart )    
  }

  render(){
    let { cart } = this.props;

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

export default connect(mapStateToProps, { checkOut })(ThankYou);