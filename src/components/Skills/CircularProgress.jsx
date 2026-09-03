import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgress = ({ value }) => {
  return (
    <div className="h-20 w-20">
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: "#F59E0B",
          trailColor: "#334155",
          textSize: "18px",
        })}
      />
    </div>
  );
};

export default CircularProgress;