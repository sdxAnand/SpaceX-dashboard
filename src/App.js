import React from "react";
import Maincontent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/footer";
import axios from "axios"
import { useEffect, useReducer, useState } from "react"


export const actions = {
  YEAR_FILTER : "year-filter",
  LAUNCH_FILTER: "launch-filter",
  LAND_FILTER : 'land-filter'
}


const reducer = (state, action) => {
  console.log(action.payload)
  switch (action.type) {
    case actions.YEAR_FILTER:
      return {
        ...state,
        launchYear: action.payload
      }
      case actions.LAUNCH_FILTER:
        return {
          ...state,
          launchStatus:action.payload
        }
      case actions.LAND_FILTER:
        return {
          ...state,
          landStatus:action.payload
        }
    default:
      return state
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, {
    launchYear: null,
    launchStatus: null,
    landStatus: null
  });

  const [data, setData] = useState([])
  useEffect(() => {
    (async () => {
      const launchSuccessString = state.launchStatus!==null ? `launch_success=${state.launchStatus}` : "";
      const landSuccessString = state.landStatus!==null ? `land_success=${state.landStatus}` : "";
      const launchYearString = state.launchYear!==null ? `launch_year=${state.launchYear}` : "";
      try {
        const res = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&${launchSuccessString}&${landSuccessString}&${launchYearString}`);
        setData(res.data)
      } catch (error) {
      }
    })()
  },[state])

  return (
    <div className="App1">
      <Navbar />
      <div className="App">
        <Sidebar dispatch={dispatch} state={state} />
        <Maincontent data={data}/>
      </div>
      {/* Develope By: Sudhansh Anand */}
      <Footer/>
    </div>
    
  );
}

export default App;
