import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";

import t1 from "../../assets/images/t1.png";
import t2 from "../../assets/images/t2.png";
import tmiddle from "../../assets/images/tmiddle.png";
import indoor from "../../assets/images/indoor.png";

import "./directory.styles.scss";

const Directory = ({ sections }) => (
  // <div className="directory-menu">
  /* <img src={tmiddle} style={{ width: "420px", height: "20%" }} />

    {sections.map(({ id, ...otherSectionProps }) => (
      <>
        <MenuItem key={id} {...otherSectionProps} />
        <img src={t2} style={{ width: "300px" }} />
      </>
    ))} */

  /* <iframe
      style={{ marginLeft: "100px" }}
      width="676"
      height="380"
      src="https://www.youtube.com/embed/RcP4aEQtArc?&controls=0&autoplay=0&loop=1"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe> */
  <>
    <div
      className="home-button"
      style={{ marginTop: "10%", marginBottom: "25%" }}
    ></div>
    <div className="vimeo-wrapper">
      <iframe
        src="https://player.vimeo.com/video/17692083?autoplay=1&controls=0&mute=0"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  </>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
