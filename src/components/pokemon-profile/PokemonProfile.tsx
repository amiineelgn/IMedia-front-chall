import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  table: {
    "& td:first-child": {
      textAlign: "right",
    },
    "& td:nth-child(3)": {
      textAlign: "right",
    },
  },
}));

const PokemonProfile = ({ data }: any) => {
  const classes = useStyles();

  return (
    <div>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell>
                <strong>Height</strong>
              </TableCell>
              <TableCell>{data.height}</TableCell>
              <TableCell>
                <strong>Weight</strong>
              </TableCell>
              <TableCell>{data.weight}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Base Experience</strong>
              </TableCell>
              <TableCell>{data.base_experience}</TableCell>
              <TableCell>
                <strong>Abilities</strong>
              </TableCell>
              {data?.abilities?.map((el: any, index: number) => (
                <TableCell key={index}>{el.ability.name}</TableCell>
              ))}
            </TableRow>
            <TableRow></TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PokemonProfile;
