import React from "react";
import hackLogo from "../images/logo-with-text.svg";

/**
 * Because mdx-deck Footer doesn't allow you to exclude it from certain slides >:(
 */
const HackFooter = () => {
  return (
    <img
      style={{
        width: 256,
        height: "auto",
        position: "fixed",
        bottom: 30,
        right: 30,
      }}
      src={hackLogo}
    />
  );
};

export default HackFooter;
