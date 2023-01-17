import { useEffect, useState, useCallback } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import PokemonModal from "../pokemon-modal/PokemonModal";

function PokemonCard(props: { data: any }) {
  const [pokeData, setPokeData] = useState([]) as any;
  const [pokeDataInfo, setPokeDataInfo] = useState({}) as any;
  const [open, setOpen] = useState(false);

  const handleOpen = (data: any) => {
    setOpen(true);    
    setPokeDataInfo(data);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getPokemon = useCallback(async () => {
    const result = await axios.get(props.data.url);
    setPokeData((state: any) => {
      state = [result.data];
      return state;
    });
  }, [props.data.url]);
  
  useEffect(() => {
    getPokemon();
  }, [getPokemon]);

  return (
    <div className="App">
      {pokeData.map((item: any, index: number) => (
        <div key={item.id}>
          <Card key={index} style={{ width: "230px" }}>
            <CardActionArea onClick={() => handleOpen(item)}>
              <CardMedia
                component="img"
                style={{
                  height: "140px",
                  width: "150px",
                  margin: "0 auto",
                }}
                image={item?.sprites?.other?.home?.front_default}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  style={{
                    margin: "0 auto",
                  }}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  {props.data.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <PokemonModal
            id={item.id}
            key={item.id}
            open={open}
            data={pokeDataInfo}
            onClose={handleClose}
          />
        </div>
      ))}
    </div>
  );
}

export default PokemonCard;
