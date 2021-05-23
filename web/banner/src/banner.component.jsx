import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.css";

const BannerWrapper = (props) => {
  return (
    <>
      <CssBaseline />
      <Banner props={props} />
    </>
  );
};

const Banner = (props) => {
  return (
    <nav id="mainNav" class="navbar navbar-default navbar-fixed-top affix-top">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed">
          <span class="sr-only">Navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand page-scroll" href="#page-top">
          Swamp Poodle Software
        </a>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a class="page-scroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a class="page-scroll" href="#services">
              Services
            </a>
          </li>
          <li>
            <a class="page-scroll" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a class="page-scroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default BannerWrapper;
