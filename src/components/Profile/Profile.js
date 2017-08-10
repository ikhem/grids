import React from 'react';
import { connect } from 'react-redux';
import { getLender } from '../../ducks/reducer';
import './Profile.css';

class Profile extends React.Component {

  componentDidMount(){
    this.props.getLender();
  }

  render() {
    return (
      <div className="profile">
        {this.props.loading ? <h1>Loading</h1> : 
        <div>
          <p className="name">{this.props.user.displayName} </p>
          <img width={100} height={100} src= {this.props.user.picture} alt="profile_pic" />
          <p>Outstanding Loans</p>
          <p>Available Kiva Credit</p>
          <button>Find a Loan</button>
        </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getLender })(Profile);