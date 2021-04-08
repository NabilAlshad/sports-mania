import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMapMarker,
  faFlag,
  faMarsStroke,
  faFutbol,
} from "@fortawesome/free-solid-svg-icons";
import { FaFacebookF, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";
import "./League.css";
import Header from "../Header/Header";

const League = () => {
  const { id } = useParams();

  const [leagueDetails, setLeagueDetails] = useState([]);
  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.leagues[0]);
        setLeagueDetails(data.leagues[0]);
      });
  }, []);
  console.log(leagueDetails);
  const {
    strLeague,
    strCountry,
    strGender,
    strSport,
    strLogo,
    strDescriptionEN,
    strFanart2,
    intFormedYear,
  } = leagueDetails;

  return (
    <div>
      <Header id={id} logo={strLogo}></Header>
      <div className="description d-flex">
        <div>
          <h1>{strLeague}</h1>
          <h5>
            <span>
              <FontAwesomeIcon icon={faMapMarker} />
            </span>
            Founded:{intFormedYear}
          </h5>
          <h5>
            <span>
              <FontAwesomeIcon icon={faFlag} />
            </span>
            country:{strCountry}
          </h5>
          <h5>
            <span>
              <FontAwesomeIcon icon={faFutbol} />
            </span>
            sport:{strSport}
          </h5>
          <h5>
            <span>
              <FontAwesomeIcon icon={faMarsStroke} />
            </span>
            Gender:{strGender}
          </h5>
        </div>
        <div>
          <img className="league-img" src={strFanart2} alt="" />
        </div>
      </div>
      <div className="row p-5">
        <div className="col-md-12 text-white">
          <p>{strDescriptionEN}</p>
        </div>
      </div>
      <div className=" text-center">
        <FaFacebookF className="icon" />
        <FaTwitterSquare className="icon" />
        <FaYoutubeSquare className="icon" />
      </div>
    </div>
  );
};

export default League;
