import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function MyNav() {
  return (
    <Navbar expand="lg" className={`bg-body-tertiary`}>
      <Container>
        <Navbar.Brand href="/home">Shoper</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className={({isActive})=>{return isActive ? 'alert alert-info nav-link text-dark fw-bolder py-2 my-0':'nav-link'}} to="/home">Home</NavLink>
            <NavLink className={({isActive})=>{return isActive ? 'alert alert-info nav-link text-dark fw-bolder py-2 my-0':'nav-link'}} to="/admin">Admin Panel</NavLink>
            <NavLink className={({isActive})=>{return isActive ? 'alert alert-info nav-link text-dark fw-bolder py-2 my-0':'nav-link'}} to="/login">Login</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;