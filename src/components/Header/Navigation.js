import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getUser, loggedOut } from '../../ducks/reducer';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import './Navigation.css';

class Navigation extends React.Component {

  componentDidMount(){
    this.props.getUser();
  }

  signOut(){
    localStorage.clear();
    axios.get('/api/signout').then(signoutRes => {
      this.props.loggedOut() //remove auth id from state
      this.props.history.push("/");
    });
  }

  render() {
  return (
    <Navbar className="Discover">

      {/* Displays the kiva logo and lend dropdown menu */}
      <Nav>
        <NavItem><Link to="/"><span className="Logo">Kiva</span></Link></NavItem> 
        <NavDropdown title="Lend">
          <MenuItem><span className="Cat">Categories</span></MenuItem>
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
            <MenuItem divider />
            <MenuItem>All Categories</MenuItem>
            <MenuItem><Link to="/Lend">All Loans</Link></MenuItem>
        </NavDropdown>
      </Nav>

      {/* Displays the shopping cart basket if the basket has items */}
      <Nav pullRight>
      {
        this.props.cart.length > 0 ?
        <NavItem><Link to="/Basket"><span className="Logo">{this.props.cart.length} Basket</span></Link></NavItem> :
        <NavDropdown title="About">
          <MenuItem>About Us</MenuItem>
          <MenuItem>How Kiva Works</MenuItem>
          <MenuItem>Impact</MenuItem>
          <MenuItem>Leadership</MenuItem>
          <MenuItem>Finances</MenuItem>
          <MenuItem>Press</MenuItem>
          <MenuItem>Due Diligence</MenuItem>
        </NavDropdown>
      }       

      {/* Displays profile picture in righthand corner if logged in */}
      {
        this.props.user.authid ? 
        <Nav>
          <NavDropdown title="Profile">
            <MenuItem><Link to="/Portfolio">Portfolio</Link></MenuItem>
            <MenuItem>My teams</MenuItem>
            <MenuItem>Donations</MenuItem>  
            <MenuItem>Settings</MenuItem>   
            <MenuItem divider />  
            <MenuItem onClick={this.signOut.bind(this)}>Sign Out</MenuItem> 
          </NavDropdown>
          <NavItem><img className="profile_pic" src={this.props.user.picture} alt="profile_pic" /></NavItem>
        </Nav>
        : <NavItem href="http://localhost:3001/auth/">Sign In</NavItem>
      }  
      </Nav> 

    </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    cart: state.cart
  }
}

export default connect(mapStateToProps, { getUser, loggedOut })(Navigation);