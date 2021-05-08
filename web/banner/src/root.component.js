import React from "react";

export default function Root(props) {
  return (
    <div>
      <section>{props.name} is mounted!</section>
      <hr />
      <span>Home</span>
      <span>Next</span>
    </div>
  );
}
