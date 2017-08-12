import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLender } from '../../ducks/reducer';
import './Profile.css';

import { Grid, Row, Col } from 'react-bootstrap';

class Profile extends React.Component {

  componentDidMount(){
    this.props.getLender();
  }

  render() {
    return (
      <Grid className="profile" fluid="false">
        <Row>
          <Col lg={6}>
  
          </Col>
          <Col lg={6}>
            {JSON.stringify(this.props.user)}
            {this.props.loading ? <h1>Loading</h1> : 
            <div>
              <p className="name">{this.props.user.displayName} </p>
              {/* <img width={100} height={100} src= {this.props.user.picture} alt="profile_pic" /> */}
              <p>Outstanding Loans</p>
              <p>Available Kiva Credit</p>
              <button><Link to='/Lend'>Find a Loan</Link></button>
            </div>
            }
          </Col>
        </Row>
      </Grid>
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