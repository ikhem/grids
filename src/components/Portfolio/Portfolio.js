import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../../ducks/reducer';
import './Portfolio.css';

import { Grid, Row, Col } from 'react-bootstrap';

class Portfolio extends React.Component {

  componentDidMount(){
    this.props.getUser();
  }

  render() {
    return (
      <Grid className="profile" fluid="false">
        <Row>
          {/* <Col lg={6}>
  
          </Col> */}
          <Col lg={12}>
            {JSON.stringify(this.props.user)}
            {this.props.loading ? <h1>Loading</h1> : 
            <div>
              <p className="name">{`${this.props.user.firstname} ${this.props.user.lastname}`} </p>
              {/* <img width={100} height={100} src= {this.props.user.picture} alt="profile_pic" />  */}
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

export default connect(mapStateToProps, { getUser })(Portfolio);