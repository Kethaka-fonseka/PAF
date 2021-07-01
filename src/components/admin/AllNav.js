import React from 'react';
import AdminNav from "./AdminNav";
import NavBar from "../Header/NavBar";


function AllNav() {
    const role = "Admin";
    const token = localStorage.getItem("user");
   if(role === token){
       return <AdminNav/>
   }else{
       return <NavBar/>
   }

}

export default AllNav;