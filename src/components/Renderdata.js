// import React, { useState, useEffect } from "react";
// import axios from "axios";
// // import img1 from "./imgk.jpg";

// const Renderdata = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://api.spacexdata.com/v3/launches?limit=100")
//       .then((res) => {
//         console.log(res);
//         setPosts(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <>
//       {posts.map((post) => (
//         <div className="datas">
//           {post.mission_name}#{post.flight_number} <br />
//           Mission Ids: {post.mission_id} <br />
//           Launch Year: {post.launch_year} <br />
//           Successful Launch:{post.launch_success} <br />
//           Successful Landing:{post.launch_landing}
//         </div>
//       ))}
//       {/* <div>
//         <img
//           src={post.mission_patch_small}
//           alt="reload"
//           width="96%"
//           height="200px"
//         />
//       </div> */}
//       {/* <div>
//         <img src={img1} alt="reload" width="96%" height="200px" />
//       </div>
//       <div className="datas">
//         hello # sir <br />
//         Mission Ids: <br />
//         Launch Year: <br />
//         Successful Launch: <br />
//         Successful Landing:
//       </div> */}
//     </>
//   );
// };

// export default Renderdata;
