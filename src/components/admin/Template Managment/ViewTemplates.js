import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

function ViewTemplates() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const getAllTemplates = () => {
      axios
        .get("http://localhost:8000/api/all")
        .then((res) => {
          setFiles(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    };
    getAllTemplates();
  }, []);
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">File</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, key) => (
            <tr key={key}>
              <td>{file.file}</td>
              <td>{file.category}</td>
              <td>
                <button
                  className="delete-user"
                  href={`http://localhost:8000/api/download/${file._id}`}
                >
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewTemplates;
