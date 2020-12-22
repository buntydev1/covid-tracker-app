import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";

const Cards = (props) => {
  console.log(props);
  return (
    <div className={styles.container}>
      <Grid spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected People
            </Typography>
            <Typography variant="h5">Real Data</Typography>
            <Typography color="textSecondary">Real Date</Typography>
            <Typography variant="body2">Active Case of Covid-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered People
            </Typography>
            <Typography variant="h5">Real Data</Typography>
            <Typography color="textSecondary">Real Date</Typography>
            <Typography variant="body2">Recovered People from Covid-19</Typography>
          </CardContent>
        </Grid>
        
      </Grid>
    </div>
  );
};
export default Cards;
