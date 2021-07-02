import React, {useEffect, useState} from "react";
import {Card, Container, Table} from "react-bootstrap";
import {Button} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import PublishIcon from "@material-ui/icons/Publish";
import axios from "axios";

function MainConManagement() {
  const [conferences, setConferences] = useState([]);
  const [deleted,setDeleted] = useState(false)
  const [activated,setActivated] = useState(false)
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
  function NavigateSchedule(id) {
      window.location =`/admin/add-timeline/${id}`;
  }
  function NavigateSpeakers(id) {

      window.location =`/admin/add-images/${id}`;
  }

  return (

      <Container className={"mt-3"} fluid>
        {conferences.map((conference, index) => (
    <Card className={"p-4"}>
      <h1 className="text-center sub-titles ">Main Conference</h1>
      <hr />
      <Button
          className={"d-flex "}
          variant={"contained"}
          color={"primary"}
          startIcon={<AddIcon />}
          onClick={NavigateSpeakers.bind(this,conference._id)}
      >
        Add Speakers
      </Button>
      <Button
          className={"d-flex "}
          variant={"contained"}
          style ={{
            color:"white",
            backgroundColor:"darkred"
          }}
          startIcon={<AddIcon />}
          onClick={NavigateSchedule.bind(this,conference._id)}
      >
        Add Timeline
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
                    color="primary"
                    startIcon={<PublishIcon />}
                    size="small"
                >
                  Update
                </Button>
              </td>
            </tr>

        </tbody>
      </Table>
    </Card>
        ))}
  </Container>);
}

export default MainConManagement;
