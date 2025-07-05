import React from "react";
import "./CompetitiveSites.css";
// import { OverlayTrigger, Tooltip } from "react-bootstrap";

class CompetitiveSites extends React.Component {
  render() {
    const { logos } = this.props;
    return (
      <>
        {Array.isArray(logos) ? (
          logos.map((logo, idx) => (
            <img
              key={idx}
              src={require("../../assests/images/images.png")}
              alt="Competitive Site"
              style={{ margin: "0 8px" }}
            />
          ))
        ) : (
          <img
            src={require("../../assests/images/images.png")}
            alt="Competitive Site"
          />
        )}
      </>
    );
  }
}

export default CompetitiveSites;
