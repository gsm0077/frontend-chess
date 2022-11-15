import React from "react";
import titlepic from "../images/titlepic.jpg";
import "./Title.css";
import datas from "./text";
const Titlepic = () => {
  const cardfacts = datas.map((data) => {
    return (
      <div className="col-12 col-md-4 col-lg-4">
      <div className="card">
        <div className="card-body">
          <div className="card-title">{data.title}</div>
          <p className="card-text">
           {data.text}
          </p>
        </div>
      </div>
    </div>
    )
  })

  return (
    <div className="undertitle">
      <h1>ONLINE CHESS COMPITATION</h1>
          <img src={titlepic} alt="chess title pic" />
          <br />
          <br />
      <h2>Facts##</h2>
      <div className="container">
        <div className="row g-3">
         {cardfacts}
        </div>
      </div>
    </div>
  );
};

export default Titlepic;
