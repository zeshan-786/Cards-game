import { Divider, Typography } from "@material-ui/core";
import React from "react";

const PlayerDetails = ({ player }) => {
  const { playerName, realName, asset } = player;

  return (
    <div
      style={{
        width: "90%",
        textAlign: "center",
        margin: "auto",
      }}
    >
      <Typography gutterBottom variant="h5">
        {playerName ? playerName : ""}
      </Typography>
      <Typography variant="subtitle1">{realName ? realName : ""}</Typography>
      <Divider />
      <br />
      <Typography variant="body1">{asset ? asset : ""}</Typography>
    </div>
  );
};

export default PlayerDetails;
