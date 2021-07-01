import React, {useState} from 'react';
import {Link} from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import {Button, Nav, Navbar} from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import {SidebarData} from "./sidebar";
import '../../stylesheets/AdminNavBar.css';
import NavBar from "../Header/NavBar";
import SubNav from "./SubNav";
import { useHistory } from "react-router-dom";
import axios from "axios";

function AdminNav() {

    const [sideBar,setSideBar] = useState(false)
    const showSideBar = () => setSideBar(!sideBar)
    const history = useHistory();

    
  function Logout() {
 
    axios
      .get("http://localhost:8070/auth/logout")
      .then((response) => {
        localStorage.removeItem("user");
        window.location.href="/"
       })
      .catch((err) => {
        console.log(err);
      });
  }

    return (
        <>

               <Navbar className={"nav-bar"} sticky="top" variant="dark">
                   <MenuIcon className="mr-sm-2"   fontSize={"large"} style={{color:"white"}} onClick={showSideBar}/>{' '}
                   <Navbar.Brand href="/">ICAF ADMIN PANEL</Navbar.Brand>
                    {/*<Nav.Link to="#" className="menu-bars">*/}
                    {/*    <FaIcons.FaBars onClick={showSideBar}/>*/}
                    {/*</Nav.Link>*/}
                   <Nav className={"mr-auto"}>

                   </Nav>
                    <Button type="submit" className="mr-sm-2" variant={"outline-light btn-1"}  onClick={Logout}>Log Out</Button>{' '}

               </Navbar>

                <Nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className={"nav-menu-item "}>
                        {SidebarData.map((item, index)=>{
                            return (

                                    <SubNav item={item} key={index}/>




                            );
                        })}
                    </ul>



                </Nav>

        </>
    );
}

export default AdminNav;