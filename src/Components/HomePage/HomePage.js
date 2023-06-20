import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <Container component="main" maxWidth="xs" margin={"30px 0px"}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" marginY={"30px"}>
            Projects
          </Typography>
          <Box sx={{ m: 2 }}>
            <Link style={{ textDecoration: "none" }} to="/contact/contactlist">
              Contact Manager
            </Link>
          </Box>
          <Box sx={{ m: 2 }}>
            <Link style={{ textDecoration: "none" }} to="/movie/movielist">
              Movie Manager
            </Link>
          </Box>
        </Box>
      </Container>
    </>
  );
};
