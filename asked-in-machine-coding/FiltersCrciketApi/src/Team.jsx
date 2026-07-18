import React, { useState, useEffect } from "react";
import "./styles.css";
const Team = () => {
  const [teams, setTeams] = useState([]);
  const [teamsCopy, setCopyTeams] = useState([]);
  const [teamsInfo, setTeamsInfo] = useState([]);
  const [active, setActive] = useState(false);
  const [role, setRole] = useState("");
  const [country, setCountry] = useState("");
  const getTeamsData = async () => {
    const resp = await fetch(
      `https://mocki.io/v1/f5d563c5-a67a-45b5-9cbe-d5779985f470`
    );
    const data = await resp.json();
    setTeams(data?.teams);
    setCopyTeams(data?.teams);
    // console.log(data.teams);
  };

  useEffect(() => {
    getTeamsData();
  }, []);
  const filterPlayer = async (teams) => {
    console.log(teams, role, country);
    const filterData = teams?.players?.filter(
      (teams) => teams?.role === role && teams?.teamName == country
    );
    setTeamsInfo(filterData);
  };
  return (
    <div>
      <div
        style={{
          padding: "5px",
          display: "flex",
          justifyContent: "space-between",
          gap: "2px",
          border: "2px solid gray",
        }}
      >
        {" "}
        <span
          className={role === "Batsman" ? "active" : ""}
          onClick={() => {
            setRole("Batsman");
            setActive(true);
          }}
        >
          {" "}
          Batsman
        </span>
        <span
          className={role === "All-rounder" ? "active" : ""}
          onClick={() => {
            setRole("All-rounder");
            setActive(true);
          }}
        >
          All-rounder
        </span>
        <span
          className={role === "Bowler" ? "active" : ""}
          onClick={() => {
            setRole("Bowler");
            setActive(true);
          }}
        >
          Bowler
        </span>{" "}
        <span
          className={role === "" ? "active" : ""}
          onClick={() => {
            setRole("");
            setActive(false);
            getTeamsData();
            setTeamsInfo([]);
          }}
        >
          Clear
        </span>{" "}
      </div>
      <table>
        {teams.map((teams, index) => (
          <tr
            key={index}
            onClick={(e) => {
              filterPlayer(teams);
              //   setTeamsInfo(teams);
              setCountry(e.target.value);
            }}
          >
            <td>{teams?.teamName}</td>
            <td>{teams?.captain}</td>
          </tr>
        ))}
      </table>
      {teamsInfo?.length > 0 && (
        <table
          style={{ border: "2px solid black", padding: "10px", margin: "5px" }}
        >
          {teamsInfo?.map((teams, index) => (
            <tr key={index}>
              <td>{teams?.name}</td>
              {/* <td>{teams?.age}</td> */}
              <td>{teams?.role}</td>
            </tr>
          ))}
        </table>
      )}
    </div>
  );
};

export default Team;
