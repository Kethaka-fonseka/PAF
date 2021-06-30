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
  const [ID, setID] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8070/api/conference/upconferences`)
      .then((res) => {
        console.log(res);
        setConferences(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  function deleteConferences(e) {
    e.preventDefault();
    const id = 1000;
    console.log(id);

    axios
      .delete(`http://localhost:8070/api/deletemanageusers/delete/${id}`)
      .then((res) => {
        alert("Deleted");
      })
      .catch((err) => {
        alert(err);
      });
  }
  function checkEligibility() {}

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
            </tr>
          </thead>
          <tbody>
            {conferences.map((conference, index) => (
              <tr className={"text-center"}>
                <td>{conference.ConferenceTitle}</td>
                <td>{conference.Description}</td>
                <td>{conference.Venue}</td>
                <td>{conference.Date}</td>
                <td>{conference.Seat}</td>
                <td>
                  <Button
                    className={"pl-0 pr-4"}
                    variant="contained"
                    startIcon={<DeleteIcon />}
                    color="success"
                    size="small"
                    value={setID(conference._id)}
                    onClick={deleteConferences}
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
                    href={checkEligibility}
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
