import React, { useState } from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import "../../stylesheets/Navbar.css";
import axios from "axios";
import {IconButton, Menu, MenuItem} from "@material-ui/core";
import {AccountCircle} from "@material-ui/icons";
// import logo from '../../assets/ICAF.svg';
function NavBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  function Logout() {
    axios
      .get("http://localhost:8070/auth/logout")
      .then((response) => {
        localStorage.removeItem("user");

        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (localStorage.getItem("user")) {
    return (
      <Navbar
        collapseOnSelect
        className='nav-bar'
        sticky='top'
        variant='dark'
        expand='md'
      >
        <Navbar.Brand href='/'>
          {/*<img*/}
          {/*    alt=""*/}
          {/*    src={logo}*/}
          {/*    width="50"*/}
          {/*    height="50"*/}
          {/*    className="d-inline-block align-top"*/}
          {/*/>{' '}*/}
          ICAF
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='mr-auto '
            // style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/keynotes'>Keynotes</Nav.Link>
            <Nav.Link href='/events'>Events</Nav.Link>
            <Nav.Link href='/templates'>Templates</Nav.Link>
            <Nav.Link href='/contact'>Contact </Nav.Link>
            <Nav.Link href='/about'>About us</Nav.Link>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </Nav>



          <Button className='mr-sm-2' onClick={Logout} variant='outline-light'>
            Logout
          </Button>{" "}
          {/*<Button className="mr-sm-2"variant="outline-light">Log out</Button>{' '}*/}
        </Navbar.Collapse>
      </Navbar>
    );
  } else {
    return (
      <Navbar
        collapseOnSelect
        className='nav-bar'
        sticky='top'
        variant='dark'
        expand='md'
      >
        <Navbar.Brand href='/'>
          {/*<img*/}
          {/*    alt=""*/}
          {/*    src={logo}*/}
          {/*    width="50"*/}
          {/*    height="50"*/}
          {/*    className="d-inline-block align-top"*/}
          {/*/>{' '}*/}
          ICAF
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='mr-auto '
            // style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/keynotes'>Keynotes</Nav.Link>
            <Nav.Link href='/events'>Events</Nav.Link>
            <Nav.Link href='/templates'>Templates</Nav.Link>
            <Nav.Link href='/contact'>Contact </Nav.Link>
            <Nav.Link href='/about'>About us</Nav.Link>
          </Nav>
          <Button className='mr-sm-2' href='/login' variant='outline-light'>
            Log in
          </Button>{" "}
          <Button className='mr-sm-2' href='/signup' variant='outline-light'>
            Sign up
          </Button>{" "}
          {/*<Button className="mr-sm-2"variant="outline-light">Log out</Button>{' '}*/}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
