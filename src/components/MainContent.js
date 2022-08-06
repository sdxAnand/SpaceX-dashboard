import React from "react";
import "./spacex.css";
// import img1 from "./imgk.jpg";
// import Renderdata from "./Renderdata";

const Maincontent = ({ data }) => {
  console.log(data)
  return (
     data.length ? <div className="Mainbox">
      {data.map((Item, i) => {
        console.log(Item.launch_landing)
        return(
        <div key={i} className="card">
          <img
            src={Item.links.mission_patch}
            alt="reload"
            width="auto"
            height="50%"
          />
          <div className="innertext">
              {Item.mission_name} : &nbsp; #{Item.flight_number}&nbsp;  <br />
              Mission Ids: {Item.mission_id} <br />
              Launch Year: {Item.launch_year} <br />
              Successful Launch:&nbsp; {Item.launch_success ? "True":"False"} <br />
              Successful Landing: {Item.launch_landing ? "True" : "False"}
          </div>
        </div>
      )})}
    </div> : <h1 className="nodata">No data found</h1>
  );
};

export default Maincontent;
