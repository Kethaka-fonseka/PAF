import React from 'react';
import AdminNav from "./AdminNav";
import NavBar from "../Header/NavBar";


function AllNav() {
   const role = "admin";
   if(role ==="admin"){
       return <AdminNav/>
   }else{
       return <NavBar/>
   }

}

export default AllNav;