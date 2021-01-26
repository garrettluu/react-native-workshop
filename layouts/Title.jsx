import React from "react";
import titlebg_light from "../images/titlebg_light.png";
import titlebg_dark from "../images/titlebg_dark.png";

const Title = ({ darkMode, children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${darkMode ? titlebg_dark : titlebg_light})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingLeft: "10%",
        color: "white",
      }}
    >
      {children}
      <style jsx>` `</style>
    </div>
  );
};

export default Title;
