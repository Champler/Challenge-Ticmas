import React, { useState } from "react";
import axios from "axios";
import {NavLink} from 'react-router-dom'
import logo from '../utils/live_tv_black_24dp.svg'

export const FileForm = () => {
  const url = `http://localhost:3001/movie`;

  const [file, setFile] = useState();

  const handleFile: any = (e) => {
    let file = e.target.files[0];

    setFile(file);
  };
  function changeBackground(e) {
    e.target.style.background = "#D8D2CB";
    e.target.style.color = "#398AB9";
  }
  function backBackground(e) {
    e.target.style.background = "#398AB9";
    e.target.style.color = "#D8D2CB";
  }
  /* const checkFile = () =>{ 
    if (file.name.split(".")[1] !== "csv") {
        return<p>Ingrese otro archivo</p>
      notValidated = "Ingrese otro archivo";
      console.log("hola");
    }
  } */

  const handleUpload = async (e) => {
    const formData = new FormData();
    formData.append("csv", file);
    fetch(url, { method: "POST" });
    await axios({
      url,
      method: "POST",
      data: formData,
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center", minHeight: '100vh'}}>
      <form action="POST">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 30,
          }}
        >
          <label
            style={{
              fontSize: 32,
              fontWeight: "bold",
              color: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 20,
            }}
          >
            Select file{" "}
            <input
              type="file"
              name="csv"
              key="csv"
              onChange={(e) => handleFile(e)}
            />
          </label>
        </div>
        <br />
        <button
          type="submit"
          onClick={(e) => handleUpload(e)}
          style={{
            backgroundColor: "#1C658C",
            color: "#EEEEEE",
            padding: "10px",
            fontSize: 15,
            border: "1px solid",
            borderRadius: "5px",
          }}
          onMouseOver={changeBackground}
          onMouseLeave={backBackground}
        >
          Upload
        </button>
      </form>
      <NavLink aria-current="page" to="/movie/getMovies">
      <img src={logo} alt='home' style= {{width: 50, height: 50}}/>
      </NavLink>
    </div>
  );
};
