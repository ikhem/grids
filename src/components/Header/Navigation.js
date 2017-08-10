import React from 'react';
import { connect } from 'react-redux';
import { getLender } from '../../ducks/reducer';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends React.Component {

  componentDidMount(){
    this.props.getLender();
  }

  render() {
  return (
    <Navbar>
      {/* <Nav> */}
        <Nav>
        <NavItem><Link to="/">Kiva</Link></NavItem> 
        {/* <Nav> */}
        <NavDropdown title="Lend">
          <h3>Categories</h3>
            <MenuItem>Women</MenuItem>
            <MenuItem>Agriculture</MenuItem>
            <MenuItem>Education</MenuItem>
            <MenuItem>Health</MenuItem>
            <MenuItem>Single Parents</MenuItem>
            <MenuItem>Refugees and IDPs</MenuItem>
            <MenuItem>Food</MenuItem>
            <MenuItem>Kiva U.S.</MenuItem>
            <MenuItem>Expiring Soon</MenuItem>
            <MenuItem>Social Enterprises</MenuItem>
            <MenuItem>Retail Businesses</MenuItem>
            <MenuItem>Arts</MenuItem>
            <MenuItem>Green</MenuItem>
            <MenuItem>Water and Sanitation</MenuItem>
            <MenuItem>Conflict Zones</MenuItem>
            <MenuItem>Men</MenuItem>
            <MenuItem>Underbanked Areas</MenuItem>
            <MenuItem>Groups</MenuItem>
            <MenuItem>Short-Term Loans</MenuItem>
            <br/>
            <MenuItem>All Categories</MenuItem>
            <MenuItem>All Loans</MenuItem>
        </NavDropdown>
        <NavDropdown title="About">
            <MenuItem>About Us</MenuItem>
            <MenuItem>How Kiva Works</MenuItem>
            <MenuItem>Impact</MenuItem>
            <MenuItem>Leadership</MenuItem>
            <MenuItem>Finaces</MenuItem>
            <MenuItem>Press</MenuItem>
            <MenuItem>Due Diligence</MenuItem>
        </NavDropdown>
        </Nav>
        {
          this.props.user ?
          <Nav pullRight>
          <NavItem><Link to="/Profile"><img width={40} height={40} src={this.props.user.picture} alt="profile_pic" /></Link></NavItem>
          </Nav> :
          <Nav pullRight>
            <NavItem href="http://localhost:3001/auth/">Sign In</NavItem>
          </Nav>
        }
      {/* </Nav> */}
    </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { getLender })(Navigation);