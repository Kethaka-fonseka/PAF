import React, {useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import {Paper} from "@material-ui/core";
import axios from "axios";

function Desc(props) {

const title = props.title;
    const desc= props.desc;
    const ven = props.ven;
    return (
       <Container>

           {/*{conferences.map((conference,index) =>{*/}
           {/*  return (*/}
           {/*      <>*/}
           {/*      </>*/}
           {/*  )*/}
           {/*})}*/}
        <div  className={"justify-content-center text-center "}>
            <h3 style={{
                fontSize: "25px",
                letterSpacing: "2pt",
                fontStyle:"italic"
            }}>{title}</h3>
            <p>
                {desc}
            </p>
            <blockquote>{ven}</blockquote>

        </div>
       </Container>
    );
}

export default Desc;