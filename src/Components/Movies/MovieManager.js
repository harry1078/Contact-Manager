import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { MovieHeader } from "./MovieListHeading";
import "./styles.css";
import { useGetMoviesQuery } from "../services/movieApi";
import { MovieDetails } from "./MovieDetails";
import { AddToCart } from "./AddToCart";
import { AddMovies } from "./AddMovies";

export const MovieManager = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const { data } = useGetMoviesQuery(query);

  useEffect(() => {
    setMovies(data?.Search);
  }, [data]);
  return (
    <div>
      <Container maxWidth="lg" className="movie__container">
        <MovieHeader query={query} setQuery={setQuery} />
        <Routes>
          <Route
            path="/movielist"
            element={<AddMovies movies={movies} />}
          ></Route>
          <Route path="/details/:id" element={<MovieDetails />}></Route>
          <Route path="/cart" element={<AddToCart />}></Route>
        </Routes>
      </Container>
    </div>
  );
};
