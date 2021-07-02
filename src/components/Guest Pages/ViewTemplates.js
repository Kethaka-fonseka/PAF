import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import {Link, useHistory} from 'react-router-dom';
import '../../stylesheets/AddTemp.css';
import Select from 'react-select';;

function ViewTemplates() {
  const [files, setFiles] = useState([]);
  const [options,setOptions] = useState([{value:'Workshop',label: 'Workshop'}, {value:'Research',label: 'Research'}]);
  const [select,setSelect] = useState();


  function filter(e){
    setSelect(e.value);
  }

  function filterSearch() {
    axios.get(`http://localhost:8070/api/template/filter/${select}`).then((res)=>{
      setFiles(res.data);

    }).catch((err)=>{
      alert(err.message);
    })
  }

  useEffect(()=>{

    const getAllTemplates=()=>{
      axios.get("http://localhost:8070/api/template/view").then((res)=>{
        setFiles(res.data);

      }).catch((err)=>{
        alert(err.message);
      })
    }
    getAllTemplates();

  },[])


  return (
      <div className="form-container01">
        <h1>Download Templates</h1>
        <Select options={options} onChange={filter}/>

        <button className="btn-filter" onClick={filterSearch}>filter</button>
        <br/><br/>
        <table class="table table-dark ">
          <thead>
          <tr>
            <th scope="col">File</th>
            <th scope="col">Category</th>
            <th scope="col">Download</th>
          </tr>
          </thead>
          <tbody class="table-light">
          {
            files.map((file, key) => (
                <tr key={key}>

                  <td>
                    {file.file}

                  </td>
                  <td>
                    {file.category}
                  </td>
                  <td>

                    <a className="download" href={`http://localhost:8070/api/template/download/${file._id}`}>Download</a>
                  </td>


                </tr>
            ))

          }

          </tbody>
        </table>
      </div>
  );
}

export default ViewTemplates;
