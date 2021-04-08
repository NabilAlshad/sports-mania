import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./CardLeague.css";

const CardLeague = (props) => {
  const { strLeague, strSport, idLeague } = props.data;
  const [league, setLeague] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLeague(data.leagues[0]);
      });
  }, []);
  console.log(idLeague);
  console.log(league);
  const { strLogo } = league;

  return (
    <div className="col-md-4 col-sm-12">
      <div
        className="card mt-4 text-center bg-secondary bg-gradient p-3 rounded text-white shadow-lg"
        style={{ width: "18rem" }}
      >
        {idLeague && <img src={strLogo} class="card-img" alt="..."></img>}

        <div className="card-body">
          <h5 className="card-title">{strLeague}</h5>
          <p>{idLeague}</p>
          <p className="card-text">sports type:{strSport}</p>
          <button className="btn btn-outline-info">
            <Link style={{ color: "white" }} to={"/league/" + idLeague}>
              explore
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardLeague;
