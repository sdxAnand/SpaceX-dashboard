import React from "react";
import "./spacex.css";
import { launch_yeardata } from "./Yeardata";
import {actions} from '../App'

const Sidebar = ({ dispatch, state }) => {
  return (
    <div className="Sidebar">
      <h2>Filter</h2>
      <h3>
        Launch Year <hr />
      </h3>
      <div className="hh">
        {launch_yeardata.map((year,i) => (
          <div key={i} className="btnh">
            <button className={`${year.launch_year === state.launchYear ? "active" : ""}`} onClick={() => dispatch({type:actions.YEAR_FILTER, payload:year.launch_year})}>
              {year.launch_year}
            </button>
          </div>
        ))}
      </div>
      <h3>
        Successful Launch <hr />
      </h3>
      <div className="btn">
        <button className={`btn ${state.launchStatus ? "active" : ""}`} onClick={() => dispatch({ type:actions.LAUNCH_FILTER, payload:true})}> True </button>
        <button className={`btn ${state.launchStatus===false ? "active" : ""}`} onClick={() => dispatch({ type:actions.LAUNCH_FILTER, payload:false})}> False </button>
      </div>
      <h3>
        Successfull Landing <hr />
      </h3>
      <div className="btn">
        <button className={`btn ${state.landStatus ? "active" : ""}`} onClick={() => dispatch({ type:actions.LAND_FILTER, payload:true})}> True </button>
        <button className={`btn ${state.landStatus===false ? "active" : ""}`} onClick={() => dispatch({ type:actions.LAND_FILTER, payload:false})}> False </button>
      </div>
    </div>
  );
};

export default Sidebar;
