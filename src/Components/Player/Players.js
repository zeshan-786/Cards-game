import React from "react";
import Grid from "@material-ui/core/Grid";

import Player from "./Player";
import { Typography } from "@material-ui/core";

const Players = ({ players, setSelectedPlayer, selectedPlayer }) => {
  return players ? (
    <Grid container spacing={3}>
      {players.map((player) => (
        <Player
          key={player.id}
          player={player}
          selectPlayer={(player) => setSelectedPlayer(player)}
          active={selectedPlayer && player.id === selectedPlayer.id}
        />
      ))}
    </Grid>
  ) : (
    <Typography gutterBottom variant="h5">
      No player found
    </Typography>
  );
};

export default Players;
