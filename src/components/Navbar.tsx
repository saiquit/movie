import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: 10,
      alignItems: "center",
    },
    nav: {
      display: "flex",
      justifyContent: "space-evenly",
      width: "50%",
      marginLeft: "auto",
      alignItems: "center",
    },
  }),
);
const TopNavbar = () => {
  const classes = useStyle();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={6}>
        <img
          src="https://user-images.githubusercontent.com/36028424/40263395-4318481e-5b44-11e8-92e5-3dcc1ce169b3.png"
          alt="logo"
          height="60"
        />
      </Grid>
      <Grid item xs={6}>
        <div className={classes.nav}>
          <p>Link One</p>
          <p>Link Two</p>
          <p>Link Three</p>
        </div>
      </Grid>
    </Grid>
  );
};

export default TopNavbar;
