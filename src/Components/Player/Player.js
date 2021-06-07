import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";

const Player = ({ player, selectPlayer, active }) => {
  const { playerName, realName, asset } = player;
  return (
    <Grid item xs={4} md={4} lg={4} onClick={() => selectPlayer(player)}>
      <Card raised={active}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h6" noWrap>
              {playerName}
            </Typography>
            <Typography variant="subtitle1" noWrap>
              {realName}
            </Typography>
            <Divider />
            <br />
            <Typography variant="body2" color="textSecondary" noWrap>
              {asset}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Player;
