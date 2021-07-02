import React, { useState } from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import Fade from '@material-ui/core/Fade';
import "../../stylesheets/Navbar.css";
import axios from "axios";
import {Menu, MenuItem} from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from "@material-ui/core/Typography";
// import logo from '../../assets/ICAF.svg';
function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const username =  localStorage.getItem("userid");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    window.location="/user/submissions";
  };

  function Logout() {
    axios
      .get("http://localhost:8070/auth/logout")
      .then((response) => {
        localStorage.removeItem("user");
        localStorage.removeItem("userid");
        localStorage.removeItem("icon_id");

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
          </Nav>

            <AccountCircleIcon style={{
              color:"white"
            }} fontSize={"large"} onClick={handleClick}/>
            <Menu
                className= {"p-2 "}
style={{marginTop: "40px"}}
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
              <MenuItem  onClick={handleClose}>Submissions</MenuItem>
              <MenuItem onClick={handleClose}>Inbox</MenuItem>
              <MenuItem onClick={Logout}>Logout</MenuItem>
            </Menu>

         <Typography className={"pl-2"} style={{ color: "white"}} variant={"subtitle1"} > {username}</Typography>
          {/*<Button className='mr-sm-2' onClick={Logout} variant='outline-light'>*/}
          {/*  Logout*/}
          {/*</Button>{" "}*/}
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
