import React, { useEffect, useState } from "react";
import "./Home.css";
import CardLeague from "../CardLeague/CardLeague";
import Header from "../Header/Header";

const Home = () => {
  const [leagues, setLeague] = useState([]);
  const first10 = leagues.slice(0, 10);
  useEffect(() => {
    fetch("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php")
      .then((res) => res.json())

      .then((data) => setLeague(data.leagues));
  }, []);

  return (
    <div>
      <div className="container ">
        <Header></Header>
        <div className="row d-flex leagues">
          {first10.map((data) => (
            <CardLeague key={data.idleague} data={data}></CardLeague>
          ))}
        </div>
      </div>

      {/* <h2>
        <Link to="/league">explore</Link>
      </h2> */}
    </div>
  );
};

export default Home;
