import React from "react";
import ApiIcon from "@mui/icons-material/Api";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
const useStyles = makeStyles({
  container: {
    boxSizing: "border-box",
    position: "sticky",
    color: "white",
    padding: "0",
    top: "0",
    width: "100%",
  },

  navbarContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    height: "78px",
    background: "black",
    boxSizing: "border-box",
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar className={classes.container}>
      <Toolbar className={classes.navbarContainer}>
        <ApiIcon style={{ fontSize: "30px", cursor: "pointer" }} />
        <Typography variant="h4">{"API Generator"}</Typography>
        <NotificationsIcon style={{ fontSize: "30px", cursor: "pointer" }} />
      </Toolbar>
    </AppBar>
  );
}
