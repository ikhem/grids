import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../../ducks/reducer';
import './Portfolio.css';

import { Grid, Row, Col } from 'react-bootstrap';
import { Card, Image, Progress, Button } from 'semantic-ui-react';

class Portfolio extends React.Component {

  componentDidMount(){
    this.props.getUser();
  }

  render() {
    console.log("Props:", this.props.sumOutstanding)
    return (
      <Grid className="profile" fluid="false">
        <Row>
          {/* <Col lg={6}>
  
          </Col> */}
          <Col lg={12}>
            {/* {JSON.stringify(this.props.user)} */}
            {this.props.loading ? <h1>Loading</h1> : 
            <div>
              {
                this.props.user.firstname ?
                <p className="name">{`${this.props.user.firstname} ${this.props.user.lastname}`} </p> :
                <p className="name">{`${this.props.user.nickname}`} </p>
              }
              {/* <img width={100} height={100} src= {this.props.user.picture} alt="profile_pic" />  */}
              <p><span className="sumOutstanding">${this.props.sumOutstanding}</span></p>
              <p>Outstanding Loans</p>
              {/* <p>Available Kiva Credit</p> */}
              <button><Link to='/Lend'>Find a Loan</Link></button>
              <p>Recent Loans</p>
              <Card.Group>
              {
              this.props.loansOutstanding.map(loan => {
                return (
                  <Card>
                    <Image src={`http://www.kiva.org/img/h300w480/${loan.image}.jpg`} />
                    <Card.Content>
                    <Card.Header>
                      {loan.name}
                    </Card.Header>
                    <Card.Meta>
                      {loan.country}
                    </Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                      <Progress value={loan.funded_amount} total={loan.loan_amount} label={`$`+(loan.loan_amount-loan.funded_amount)+' to go'} color='green'/>  
                    </Card.Content>
                  </Card> 
                )
              })
              }
              </Card.Group>
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
    loading: state.loading,
    sumOutstanding: state.sumOutstanding,
    loansOutstanding: state.loansOutstanding
  }
}

export default connect(mapStateToProps, { getUser })(Portfolio);