// import React, { useEffect, useState } from "react";
// import "./style.css";
// import axios from "axios";
// export const Websokket = () => {
//   const [message, setMassage] = useState([]);
//   const [value, setValue] = useState("");
//   const sendMassage = async () => {
//     await axios.post("http://localhost:5000/new-masseges", {
//       messages: value,
//       id: Date.now(),
//     });
//   };
//   useEffect(() => {
//     subscribe()
//   }, []);
//   const subscribe = async () => {
//     try {
//       const { data } = await axios.get("http://localhost:5000/get-messages");
//       setMassage((prev) => [data, ...prev]);
//       await subscribe();
//     } catch (e) {
//       setTimeout(() => {
//         subscribe();
//       }, 500);
//     }
//   };

//   return (
//     <div className="Container">
//       <input
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         type="text"
//         placeholder="add todo...."
//       />
//       <button onClick={sendMassage}>add</button>
//       <div>
//         {message.map((v) => {
//           return (
//             <div key={v.id}>
//               <h1>{v.messages}</h1>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
// export default Websokket;
