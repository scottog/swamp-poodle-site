import React from "react";

export default function Root(props) {
  return <div>
    <section>{props.name} is mounted!</section>
    <hr/>
    <button>Main button!</button>
  </div>
}
