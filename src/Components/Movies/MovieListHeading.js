import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { SearchBar } from "./SearchBar";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MovieModal from "../Layout/Modal/Modal";
import { useSelector } from "react-redux";
import { selectAllMovies } from "../../Redux/movieSlice";
import MovieFilterRoundedIcon from "@mui/icons-material/MovieFilterRounded";
const MovieListHeading = (props) => {
  return (
    <Box display={"flex"} alignItems={"center"}>
      <Typography variant="h4">{props.heading}</Typography>
      <MovieFilterRoundedIcon fontSize="large" />
    </Box>
  );
};

export const MovieHeader = (props) => {
  const movieList = useSelector(selectAllMovies);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const showCart = () => {
    setIsOpenCart(true);
  };
  const closeCart = () => {
    setIsOpenCart(false);
  };

  const { query, setQuery } = props;
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        m={3}
      >
        <MovieListHeading heading="Movies" />

        <SearchBar query={query} setQuery={setQuery} />
        <Box>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={movieList?.length} color="secondary">
              <ShoppingCartOutlinedIcon onClick={showCart} />
            </StyledBadge>
          </IconButton>
        </Box>
      </Box>
      {isOpenCart && <MovieModal isOpen={isOpenCart} onClose={closeCart} />}
    </>
  );
};
