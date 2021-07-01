import React from 'react';
import AdminNav from "./AdminNav";
import NavBar from "../Header/NavBar";


function AllNav() {
    const role = ["Admin","Editor","Reviewer"];
    const token = localStorage.getItem("user");
   if(role[0] === token || role[1] === token || role[2] === token){
       return <AdminNav/>
   }else{
       return <NavBar/>
   }

}

export default AllNav;