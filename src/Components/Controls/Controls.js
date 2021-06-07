import React, { useState } from "react";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Button, Typography } from "@material-ui/core";
import Spinner from "../UI/Spinner/Spinner";
import Notification from "../UI/Notification/Notification";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 300,
  },
}));

const Controls = ({ selectedPlayer, sortAsc, sortDesc }) => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [loading, setLoading] = useState(false);
  const [notify, setNotify] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setNotify(false);
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "post",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(selectedPlayer),
    }).then((res) => {
      setLoading(false);
      setNotify(true);
    });
  };

  const submitButton = (
    <Grid item xs={12} md={12} lg={12} spacing={3}>
      <Button
        variant="outlined"
        color="default"
        disabled={!selectedPlayer}
        fullWidth
        onClick={() => handleSubmit()}
      >
        Submit
      </Button>
    </Grid>
  );

  return (
    <Grid item xs={12} md={4} lg={4}>
      <Paper className={fixedHeightPaper}>
        <Typography variant="h5" align="center" color="primary">
          Controls
        </Typography>
        <br></br>
        <Grid container spacing={3}>
          <Grid item xs={6} md={6} lg={6} spacing={3}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => sortAsc()}
              fullWidth
            >
              Sort ASC
            </Button>
          </Grid>
          <Grid item xs={6} md={6} lg={6} spacing={3}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => sortDesc()}
              fullWidth
            >
              Sort DESC
            </Button>
          </Grid>
          {notify ? (
            <Notification
              message={"user successfully updated!"}
              severity={"info"}
            />
          ) : (
            ""
          )}
          {loading ? <Spinner /> : submitButton}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Controls;
