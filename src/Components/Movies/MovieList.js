import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./styles.css";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import {
  addMoviesToCart,
  removeMovieFromCart,
  selectAllMovies,
} from "../../Redux/movieSlice";
import { successMsg } from "../Auth/LoginError";

export const MovieList = (props) => {
  const dispatch = useDispatch();
  const { movie } = props;
  const watchList = useSelector(selectAllMovies);

  let storedMovies = watchList.find((i) => i.imdbID === movie.imdbID);
  const addListDisabled = storedMovies ? true : false;

  const addMovieHandler = (movie) => {
    dispatch(addMoviesToCart(movie));
    successMsg("added successfully!");
  };

  const deleteMovieHandler = (imdbID) => {
    dispatch(removeMovieFromCart(imdbID));
    successMsg("deleted successfully!");
  };

  return (
    <Card sx={{ width: "300px", padding: "20px", mr: 4, mb: 4 }}>
      <Link
        to={`/movie/details/${movie.imdbID}`}
        target="_self"
        style={{ textDecoration: "none", color: "white" }}
      >
        <CardMedia
          component="img"
          alt="movie"
          src={movie.Poster}
          sx={{
            objectFit: "fill",
            width: "300px",
            height: "300px",
          }}
        />
      </Link>
      <CardContent sx={{ padding: "16px 0px" }}>
        <Box>
          <Typography gutterBottom variant="h5" component="div">
            {movie.Title}
          </Typography>
          <Moment format="YYYY">{movie.Year}</Moment>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={() => addMovieHandler(movie)}
          disabled={addListDisabled}
        >
          {addListDisabled ? `Movie Added` : `Add to cart`}
        </Button>
        <Button
          variant="contained"
          size="small"
          color="error"
          onClick={() => deleteMovieHandler(movie.imdbID)}
          disabled={!addListDisabled}
        >
          Delete from cart
        </Button>
      </CardActions>
    </Card>
  );
};
