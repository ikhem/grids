import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './Navigation.css';

export default function Navigation(){
  return (
    <Navbar>
      <Nav>
        <NavItem>Kiva</NavItem> 
        <NavDropdown title="Lend">
          <h1>Categories</h1>
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
        <NavItem href="#">Sign In</NavItem>
      </Nav>
    </Navbar>
  );
}