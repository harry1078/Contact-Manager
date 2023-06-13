import React from "react";
import { useUserContext } from "../../Context/userContext";
import { Button, Container, Typography } from "@mui/material";

export const HomePage = () => {
  const { user, logOut } = useUserContext();
  return (
    <>
      <Container component="main" maxWidth="xs" margin={"30px 0px"}>
        <Typography variant="subtitle1" marginY={"30px"}>
          You are now logged in as, {user.name}
        </Typography>
        <Button variant="text" onClick={logOut}>
          Logout
        </Button>
      </Container>
    </>
  );
};
