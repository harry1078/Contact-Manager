import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useUserContext } from "../../Context/userContext";
import DescriptionAlerts from "../Auth/DescriptionAlert";
import LogoutIcon from "@mui/icons-material/Logout";
export const Header = () => {
  const { user, logOut, error } = useUserContext();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={{ padding: "0px 48px " }}>
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, textAlign: "initial" }}
            >
              React App
            </Typography>
            <Typography component="div" mr={"20px"}>
              Welcome, {user.name}
            </Typography>

            {user.isUserLoggedIn && (
              <LogoutIcon onClick={logOut} sx={{ cursor: "pointer" }} />
            )}
          </Toolbar>
        </AppBar>
      </Box>
      {error && <DescriptionAlerts />}
    </>
  );
};
