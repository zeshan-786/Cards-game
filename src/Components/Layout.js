import React, { useEffect, useState } from "react";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ContentView from "./UI/ContentView/ContentView";
import { Typography } from "@material-ui/core";

import Controls from "./Controls/Controls";
import PlayerDetails from "./Player/PlayerDetails";
import Players from "./Player/Players";
import Spinner from "./UI/Spinner/Spinner";

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

const Layout = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [players, setPlayers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sortingOrder, setSortingOrder] = useState("");

  async function fetchPlayers() {
    const response = await fetch("./PlayersData.json");
    const json = await response.json();
    setPlayers(json);
    setLoading(false);
  }

  useEffect(() => {
    fetchPlayers();
  }, []);

  const sortByOrder = (sortOrder) => {
    const newPlayersOrder =
      sortOrder === "Asc"
        ? players.sort((a, b) => (a.playerName > b.playerName ? 1 : -1))
        : players.sort((a, b) => (a.playerName < b.playerName ? 1 : -1));
    setPlayers(newPlayersOrder);
    setSortingOrder(sortOrder);
  };

  if (loading) return <Spinner />;

  return (
    <ContentView>
      {selectedPlayer && (
        <Grid item xs={12} md={8} lg={8}>
          <Paper className={fixedHeightPaper}>
            <Typography variant="h5" align="center" color="primary">
              Details
            </Typography>
            <PlayerDetails player={selectedPlayer} />
          </Paper>
        </Grid>
      )}
      <Controls sortByOrder={sortByOrder} selectedPlayer={selectedPlayer} sortingOrder={sortingOrder} />
      <Grid item xs={12} md={12} lg={12}>
        <Paper>
          <Typography variant="h5" align="center" color="primary">
            Overview
          </Typography>
          <Players
            players={players}
            selectedPlayer={selectedPlayer}
            setSelectedPlayer={setSelectedPlayer}
          />
        </Paper>
      </Grid>
    </ContentView>
  );
};

export default Layout;
