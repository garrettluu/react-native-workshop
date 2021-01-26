import React from "react";
import logoBlank from "../images/logo-blank.svg";

const Square = ({ style, className, innerText, imageSize, fontSize }) => {
  return (
    <div
      style={{ ...style, width: imageSize, height: imageSize }}
      className="square"
    >
      <img
        style={{ width: imageSize, height: "auto" }}
        className={`square-image ${className}`}
        src={logoBlank}
        alt={innerText}
      />
      <p style={{ fontSize: fontSize }} className="subtitle">
        {innerText}
      </p>
      <style jsx>{`
        .square {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .subtitle {
          position: absolute;
          color: white;
        }

        .square-image {
          position: absolute;
        }
      `}</style>
    </div>
  );
};

export default Square;
