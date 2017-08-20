import React from 'react';

import { connect } from 'react-redux';

import { Grid, Panel } from 'react-bootstrap';
import { Table, Divider, Icon } from 'semantic-ui-react';
import moment from 'moment';

import { checkOut } from '../../ducks/reducer';

import './ThankYou.css';

class ThankYou extends React.Component {

  componentWillMount(){
    this.props.checkOut( this.props.cart )    
  }

  render(){
    let { cart } = this.props;
    let time = moment(new Date()).format("MMMM Do YYYY, h:mm a");
    
    console.log(time)
    return(
      <Grid className="Confirmation">
        <h1>Order Confirmed</h1>

        <p>Thank you for your support</p>
        <p>email confirmation will be sent</p>

        <div className="Receipt">
          <p>{time}</p>
          <p>{`${this.props.user.firstname} ${this.props.user.lastname}`}</p>
          <p>{this.props.user.email}</p>
        </div>

        <Divider />

        <span className="lendWithFriends">
          <p>Lending with friends is more impactful</p>
        </span>
        <p>Share this borrower's story</p>

        <Icon link circular name="facebook square" size="huge" />
        <Icon link circular name="twitter" size="huge" />

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