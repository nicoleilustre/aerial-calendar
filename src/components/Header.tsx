import React from "react";
import { useHistory } from "react-router-dom";
import { UsernamePropInterface } from "../utils/types";

export const Header = ({ username }: UsernamePropInterface) => {
  const history = useHistory();
  function handleClick() {
    history.push("/home");
  }
  return (
    <div id="header">
      <h1 id="header-welcome">Welcome, {username}</h1>
      <button className="btn-right" onClick={handleClick}>
        Back
      </button>
    </div>
  );
};
