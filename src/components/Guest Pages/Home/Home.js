import React, {useEffect, useState} from 'react';
import Time from "./SubHome/Time";
import Typography from "@material-ui/core/Typography";
import Speakers from "./SubHome/Speakers";
import Desc from "./SubHome/Desc";
import Upcoming from "./SubHome/Upcoming";
import '../../../stylesheets/titles.css';
import Timer from "../../Header/Timer";
import Vid from "./SubHome/Vid";
import axios from "axios";

function Home() {
    const [conferences, setConferences] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:8070/api/conferences/main`)
            .then((res) => {
                console.log(res);
                setConferences(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    },[]);
    return (
        <div >
            {conferences.map((conference,index) =>{
              return (
                  <>
                      <Vid title={conference.con_title} id={conference._id}/>
                      <br/><br/><br/>
                      <h1 className={"sub-titles text-center"} >ABOUT</h1>
                      <hr className="divider"/>
                      <br/>
                      <Desc title={conference.con_title} ven={conference.venue} desc={conference.description}/>
                      <br/>

                      <br/>
                  </>
              )
            })}

            {/*New Line*/}

            <h1 className={"sub-titles text-center"} >KEYNOTE SPEAKERS</h1>
            <hr className="divider"/>
                        <br/>
                        <Speakers/>
                        <br/>

            {/*New Line*/}


            <h1 className={"sub-titles text-center"} >CONFERENCE TIMELINE</h1>
            <hr className="divider"/>
                <br/>
                <Time/>
                <br/>

            <h1 className={"sub-titles text-center"} >UPCOMING CONFERENCES</h1>
            <hr className="divider"/>
            <br/>
            <Upcoming/>
            <br/>

        </div>
    );
}

export default Home;