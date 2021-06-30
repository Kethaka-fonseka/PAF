import React, {useState} from 'react';
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import '../../stylesheets/Navbar.css';
// import logo from '../../assets/ICAF.svg';
function NavBar() {

    return (


        <Navbar collapseOnSelect className="nav-bar" sticky="top" variant="dark" expand="md">

            <Navbar.Brand href="/">
                {/*<img*/}
                {/*    alt=""*/}
                {/*    src={logo}*/}
                {/*    width="50"*/}
                {/*    height="50"*/}
                {/*    className="d-inline-block align-top"*/}
                {/*/>{' '}*/}
               ICAF</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mr-auto "
                    // style={{ maxHeight: '100px' }}
                    navbarScroll
                >

                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/keynotes">Keynotes</Nav.Link>
                    <Nav.Link href="/events">Events</Nav.Link>
                    <Nav.Link href="/templates">Templates</Nav.Link>
                    <Nav.Link href="/contact">Contact </Nav.Link>
                    <Nav.Link href="/about">About us</Nav.Link>


            </Nav>
            <Button className="mr-sm-2" href="/login" variant="outline-light">Log in</Button>{' '}
            <Button className="mr-sm-2"  href="/signup" variant="outline-light">Sign up</Button>{' '}
            {/*<Button className="mr-sm-2"variant="outline-light">Log out</Button>{' '}*/}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;