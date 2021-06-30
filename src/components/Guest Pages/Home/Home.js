import React from 'react';
import Time from "./SubHome/Time";
import Typography from "@material-ui/core/Typography";
import Speakers from "./SubHome/Speakers";
import Desc from "./SubHome/Desc";
import Upcoming from "./SubHome/Upcoming";
import '../../../stylesheets/titles.css';
import Timer from "../../Header/Timer";

function Home() {
    return (
        <div >
            <h1 className={"sub-titles text-center"} >ABOUT</h1>
            <hr className="divider"/>
            <br/>
            <Desc/>
            <br/>

            <br/>
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