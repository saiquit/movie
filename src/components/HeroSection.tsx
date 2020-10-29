import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: 450,
      backgroundImage: `url(https://wallpapercave.com/wp/wp1945898.jpg)`,
    },
    overlay: {
      minHeight: 450,
      backgroundColor: "#00000082",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    heading: {
      fontSize: 54,
      color: "white",
    },
  }),
);
const HeroSection = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.overlay}>
        <h1 className={classes.heading}>Movie WebApp</h1>
      </div>
    </div>
  );
};

export default HeroSection;
