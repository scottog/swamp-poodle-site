import React from "react";
import Button from "@material-ui/core/Button";

const Banner = (props) => {
  return (
    <div>
      <section>Banner is mounted!</section>
      <Button icon="home" variant="contained">
        Home
      </Button>
      <Button variant="contained">Next</Button>
    </div>
  );
};

export default Banner;
