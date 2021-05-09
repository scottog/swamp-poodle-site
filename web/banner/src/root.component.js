import React from "react";
import Button from "@material-ui/core/Button";

export default function Root(props) {
  return (
    <div>
      <section>{props.name} is mounted!</section>
      <hr />
      <Button variant="contained">Hello World</Button>
      <span>Next</span>
    </div>
  );
}
