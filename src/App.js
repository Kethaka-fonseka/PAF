import React from 'react';
import axios from "axios";
import MainRoutes from "./Routes/mainRoutes";
axios.defaults.withCredentials= true;
function App() {
    return (
     <MainRoutes/>
    );


}

export default App;
