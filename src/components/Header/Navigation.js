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
    console.log("Cart: ", this.props.user.cart.length);
    // console.log("Cart.Length", this.props.cart[0].length);
  return (
    <Navbar>
      <Nav>
        <NavItem><Link to="/">Kiva</Link></NavItem> 
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
            <MenuItem divider />
            <MenuItem>All Categories</MenuItem>
            <MenuItem><Link to="/Lend">All Loans</Link></MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        {
          this.props.user.cart.length > 0 ?
          <NavItem><Link to="/Basket">{this.props.user.cart.length} Basket</Link></NavItem> :
          <NavDropdown title="About">
            <MenuItem>About Us</MenuItem>
            <MenuItem>How Kiva Works</MenuItem>
            <MenuItem>Impact</MenuItem>
            <MenuItem>Leadership</MenuItem>
            <MenuItem>Finaces</MenuItem>
            <MenuItem>Press</MenuItem>
            <MenuItem>Due Diligence</MenuItem>
          </NavDropdown>
        }       

        {
          this.props.user.authid ? 
          <Nav>
            <NavDropdown title="Profile">
              <MenuItem><Link to="/Profile">Portfolio</Link></MenuItem>
              <MenuItem>My teams</MenuItem>
              <MenuItem>Donations</MenuItem>  
              <MenuItem>Settings</MenuItem>   
              <MenuItem divider />     
              <MenuItem href="http://localhost:3001/api/signout">Sign Out</MenuItem>
            </NavDropdown>
            <NavItem><Link to="/Profile"><img width={40} height={40} src={this.props.user.picture} alt="profile_pic" /></Link></NavItem>
          </Nav> :
          <NavItem href="http://localhost:3001/auth/">Sign In</NavItem>
        }
      </Nav> 
    </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    // cart: state.cart
  }
}

export default connect(mapStateToProps, { getLender })(Navigation);