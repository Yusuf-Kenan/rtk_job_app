import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h2>Work Work Work</h2>
      <div>
        <Link to={"/"}>Job List</Link>
        <Link to={"/add-job"}>Job Add</Link>
      </div>
    </header>
  );
}
