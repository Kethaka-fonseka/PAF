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
import {Container} from "@material-ui/core";
import {Row} from "react-bootstrap";

function Home() {
    const [conferences, setConferences] = useState([]);
    const [upconferences, setupConferences] = useState([]);
    const [schedules, setSchedules] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:8070/api/conferences/main`)
            .then((res) => {
                console.log(res.data);
                setConferences(res.data);
                localStorage.setItem("con_id",conferences[0]._id);
                localStorage.setItem("participant_fee",conferences[0].researcher_fee);
                localStorage.setItem("researcher_fee",conferences[0].participant_fee);
                console.log(conferences[0].participant_fee);
            })
            .catch((err) => {
                console.log(err);
            });

        axios
            .get(`http://localhost:8070/api/conferences/up`)
            .then((res) => {
                console.log(res.data);
                setupConferences(res.data);
            })
            .catch((err) => {
                console.log(err);
            });


        axios
            .get("http://localhost:8070/api/schedules/")
            .then((res) => {
                console.log(res.data);
                setSchedules(res.data);

            })
            .catch((err) => {
                console.log(err);
            });

    },[3]);
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

            {schedules.map((schedule,index) =>{
                return (
                    <div>
                    <Time schedule ={schedule}/>
                    </div>
                )
            })}

                <br/>

            <h1 className={"sub-titles text-center"} >UPCOMING CONFERENCES</h1>

            <hr className="divider"/>
            <br/>
            <Container>
                <Row className="g-3" >
            {upconferences.map((upconference,index) =>{
                return (
                        <Upcoming conference ={upconference}/>

                )
            })}
                </Row>
                </Container>
            <br/>

        </div>
    );
}

export default Home;