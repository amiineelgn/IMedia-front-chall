import {
  Modal,
  Backdrop,
  Fade,
  Chip,
  Typography,
  IconButton,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import PokemonProfile from "../pokemon-profile/PokemonProfile";
import PokemonStats from "../pokemon-stats/PokemonStats";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflowY: "scroll",
  },
  paper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 900,
    gap: 10,
  },
  chip: {
    display: "flex",
    flexDirection: "row",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(30),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

const PokemonModal = ({ open, data, onClose, id }: any) => {
  const classes = useStyles();

  if (!open) return null;
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h2">{data.name}</Typography>

          <div className={classes.chip}>
            {data?.types?.map((el: any, index: any) => (
              <div key={index}>
                <Chip
                  key={index}
                  label={el.type.name}
                  style={{ backgroundColor: "#48bfe0" }}
                />
              </div>
            ))}
          </div>
          <Typography variant="h4">Profile</Typography>
          <PokemonProfile data={data} />
          <Typography variant="h4">Stats</Typography>
          <PokemonStats data={data} />
        </div>
      </Fade>
    </Modal>
  );
};

export default PokemonModal;
