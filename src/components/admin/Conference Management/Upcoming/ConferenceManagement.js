import React, { useEffect, useState } from "react";
import { Card, Container, Table } from "react-bootstrap";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CheckIcon from "@material-ui/icons/Check";
import PublishIcon from "@material-ui/icons/Publish";
import "../../../../stylesheets/titles.css";
import axios from "axios";
import swal from "sweetalert";
function ConferenceManagement() {
  const [conferences, setConferences] = useState([]);
  const [main, setMain] = useState([]);

  const [deleted,setDeleted] = useState(false)
  const [activated,setActivated] = useState(false)
  const [ID, setID] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8070/api/conferences/up`)
      .then((res) => {
        console.log(res);
        setConferences(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[deleted,activated]);

  function deleteConferences(id) {
    console.log(id);
    axios
      .delete(`http://localhost:8070/api/conferences/${id}`)
      .then((res) => {
        alert("Deleted");
        setDeleted(true)
      })
      .catch((err) => {
        alert(err);
      });
  }
  function checkEligibility(id) {

    axios
        .get(`http://localhost:8070/api/conferences/main`)
        .then((res) => {
          console.log(res);
          setMain(res.data);
          console.log("Im here");
          console.log(res.data);
          if(res.data.length != 0){
              alert("There can't be two main events, Please close current main event!")
          }else{
              if(res.data._id != null)
              {
                  alert("There can be only one main event!");
              }else{
                  makeMain(id);
                  setActivated(true)
              }
          }
        })
        .catch((err) => {
          console.log(err);
        });
  }
function makeMain(id){
    console.log(id);
  axios
      .patch(`http://localhost:8070/api/conferences/${id}`)
      .then((res) => {
        console.log(res);
         alert("Successful");

      })
      .catch((err) => {
        console.log(err);
      });

}
  return (
    <Container fluid>

      <Card className={"p-4"}>
        <h1 className="text-center sub-titles ">Upcoming Events</h1>
        <hr />
        <Button
          className={"d-flex "}
          variant={"contained"}
          color={"primary"}
          startIcon={<AddIcon />}
          href={"/admin/addupconference"}
        >
          Add Conference
        </Button>
        <Table responsive striped bordered hover variant="dark">
          <thead>
            <tr className={"text-center"}>
              <th>Title</th>
              <th>Description</th>
              <th>Venue</th>
              <th>Date</th>
              <th>Seat Count</th>
                <th>Researcher Fee</th>
                <th>Participant Fee</th>
            </tr>
          </thead>
          <tbody>
            {conferences.map((conference, index) => (

              <tr className={"text-center"}>
                <td>{conference.con_title}</td>
                <td>{conference.description}</td>
                <td>{conference.venue}</td>
                <td>{conference.date}</td>
                <td>{conference.seats}</td>
                  <td>LKR: {conference.researcher_fee}</td>
                  <td>LKR: {conference.participant_fee}</td>
                <td>
                  <Button
                    className={"pl-0 pr-4"}
                    variant="contained"
                    startIcon={<DeleteIcon />}
                    color="success"
                    size="small"

                    onClick={deleteConferences.bind(this,conference._id)}
                  >
                    Delete
                  </Button>
                </td>
                <td>
                  <Button
                    className={"pl-0 pr-4"}
                    variant="contained"
                    color="secondary"
                    startIcon={<CheckIcon />}
                    size="small"
                    onClick={checkEligibility.bind(this,conference._id)}
                  >
                    Activate
                  </Button>
                </td>
                <td>
                  <Button
                    className={"pl-0 pr-4"}
                    variant="contained"
                    color="primary"
                    startIcon={<PublishIcon />}
                    size="small"
                  >
                    Update
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
}

export default ConferenceManagement;
