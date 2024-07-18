import React from "react";
import { Link } from "react-router-dom";
import banner404 from "../../Assets/Images/404.png";
const Error404Page = () => {
  return (
    <div
      className="error-page"
      style={{
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src={banner404} style={{ height: "40vh" }} alt="404 banner" />
      <h1 className="text-lg font-bold">Whoops! Lost in the cosmos?</h1>
      <p>
        The page you're looking for seems to have gotten lost amongst the stars.
        No worries, we can help you get back on track.
      </p>
      <Link to="/" className="bg-blue-500 p-2 rounded text-white font-bold mt-4">Take me home</Link>
    </div>
  );
};

export default Error404Page;
