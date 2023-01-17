import { Paper, Typography, Container } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import ProgressBar from "react-customizable-progressbar";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  progress: {
    width: "240px",
  },
  progressHolder: {
    width: "240px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  progressText: {
    position: "absolute",
  },
  statTitle: {
    fontSize: ".7rem",
  },
}));

const PokemonStats = ({data}: any) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Container maxWidth="md" className={classes.container}>
        {data.stats.map((stat: any, index: number) => (
          <div key={index} className={classes.progressHolder}>
            <div className={classes.progressText}>
              <Typography variant="h6" className={classes.statTitle}>
                <strong>{stat.stat.name}</strong>
              </Typography>
              <Typography variant="h5">{stat.base_stat}</Typography>
            </div>
            <ProgressBar
              className={classes.progress}
              radius={60}
              progress={stat.base_stat}
              strokeWidth={10}
              strokeColor="#ee1515"
              trackStrokeWidth={10}
            />
          </div>
        ))}
      </Container>
    </Paper>
  );
};

export default PokemonStats;
