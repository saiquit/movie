import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid, IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import NavDrawer from "./NavDrawer";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: 10,
      alignItems: "center",
    },
    menu: {
      display: "flex",
      justifyContent: "flex-end",
    },
    logo: {
      color: "black",
      textDecoration: "none",
      fontSize: 30,
    },
  }),
);
const TopNavbar = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  return (
    <Grid container className={classes.root}>
      <Grid item xs={6}>
        <Link className={classes.logo} to="/">
          <p>Movie App</p>
        </Link>
      </Grid>
      <Grid style={{ display: "flex", justifyContent: "flex-end" }} item xs={6}>
        <IconButton onClick={() => setOpen(true)} className={classes.menu}>
          <Menu />
        </IconButton>
      </Grid>
      <NavDrawer open={open} setOpen={setOpen} />
    </Grid>
  );
};

export default TopNavbar;
