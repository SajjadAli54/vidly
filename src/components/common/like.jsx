import React, { Component } from "react";

const Like = ({ liked, onClick }) => {
  let open = !liked ? "-o" : "";
  return (
    <i
      onClick={onClick}
      style={{ cursor: "pointer" }}
      className={`fa fa-heart${open}`}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
