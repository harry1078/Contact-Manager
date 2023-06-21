import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Box, Button, Card, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeMovieFromCart, selectAllMovies } from "../../Redux/movieSlice";
import Moment from "react-moment";
import { successMsg } from "../Auth/LoginError";

export const AddToCart = (props) => {
  const dispatch = useDispatch();
  const addMovie = useSelector(selectAllMovies);

  const deleteMovieHandler = (imdbID) => {
    dispatch(removeMovieFromCart(imdbID));
    successMsg("removed successfully!");
  };

  const isCartEmpty = (
    <>
      <Typography textAlign={"center"} variant="subtitle2">
        Your cart is empty!
      </Typography>
    </>
  );

  const style = {
    scroll: () => {
      return {
        minWidth: "500px",
        p: 2,
      };
    },
    cartBox: () => {
      return {
        mt: 4,
        height: "500px",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          height: "6px",
          width: "6px",
        },
        "&::-webkit-scrollbar-track": {
          "--webkitBorderRadius": "10px",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-thumb": {
          "--webkitBorderRadius": "10px",
          borderRadius: "10px",
          backgroundColor: "#c8c8c8",
          "--webkitBoxShadow": "inset 0 0 6px #c8c8c8",
        },
      };
    },
  };

  return (
    <div>
      <Card sx={style.scroll}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h5">Cart Items</Typography>
          <Box>
            <CloseRoundedIcon
              onClick={props.onClose}
              sx={{ cursor: "pointer" }}
            />
          </Box>
        </Box>

        <Box sx={style.cartBox}>
          {addMovie?.length
            ? addMovie?.map((movie) => {
                return (
                  <Card sx={{ p: 2, mb: 2 }} key={movie.imdbID}>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems={"center"}
                    >
                      <Box>
                        <Typography variant="h6">{movie.Title}</Typography>
                        <Typography variant="subtitle2">
                          Year - <Moment format="YYYY">{movie.year}</Moment>
                        </Typography>
                      </Box>
                      <Box>
                        <Button
                          variant="contained"
                          size="small"
                          color="error"
                          onClick={() => deleteMovieHandler(movie.imdbID)}
                        >
                          Remove
                        </Button>
                      </Box>
                    </Box>
                  </Card>
                );
              })
            : isCartEmpty}
        </Box>
      </Card>
    </div>
  );
};
