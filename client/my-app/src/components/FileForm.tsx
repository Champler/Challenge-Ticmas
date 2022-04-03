import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import logo from "../utils/live_tv_black_24dp.svg";

export const FileForm = () => {
  const url = `http://localhost:3001/movie`;

  const [file, setFile] = useState();

  const handleFile = (e) => {
    let file = e.target.files[0];

    setFile(file);
  };
  const handleUpload = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const formData = new FormData();
    formData.append("csv", file);
    await axios({
      baseURL: url,
      method: "POST",
      data: formData,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
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
          <label htmlFor="formFileLg" className="form-label">
            <h4>Select file</h4>
          </label>
          <input
            className="form-control form-control-lg"
            id="formFileLg"
            type="file"
            name="csv"
            key="csv"
            onChange={(e) => handleFile(e)}
          ></input>
        </div>
        <br />

        <Button
          type="submit"
          onClick={(e) => handleUpload(e)}
          variant="primary"
        >
          Upload
        </Button>
      </form>
      <div style={{display:'flex', gap: 20, alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
      <h3>Go to movies:</h3>
      <NavLink aria-current="page" to="/movie/getMovies">
        <img src={logo} alt="home" style={{ width: 50, height: 50 }} />
      </NavLink>
      </div>
    </div>
  );
};
