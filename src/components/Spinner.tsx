import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      width: "100%",
      minHeight: "100vh",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      "& > * + *": {
        marginLeft: theme.spacing(2),
      },
    },
  }),
);

export default function Spinner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
      <h3>Loading...</h3>
    </div>
  );
}
