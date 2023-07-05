import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./Components/button";
import App from "./App";
// const Index = () => {
//   return (
//     <App />
//     // <div>
//     //   <p className="text-3xl font-bold underline text-red-500">
//     //     {" "}
//     //     WELCOME TO REACT APP!
//     //   </p>

//     //   <Button type={"bana"} />
//     // </div>
//   );
// };
// ReactDOM.render(<Index />, document.getElementById("app"));
const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
