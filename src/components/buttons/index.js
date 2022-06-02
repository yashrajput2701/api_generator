import React from "react";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import GppGoodIcon from "@mui/icons-material/GppGood";

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
      width: 180,
      height: 50,
      fontSize: 20,
      backgroundColor: "black",
      color: "white",
      "&:hover": { backgroundColor: "black" },
    },
  })
);

export default function ButtonComponent(handleClick) {
  const classes = useStyles();
  console.log(handleClick, "handleclick");
  return (
    <div>
      <Button
        variant="contained"
        color="white"
        className={classes.button}
        endIcon={<GppGoodIcon></GppGoodIcon>}
        onClick={() => handleClick()}
      >
        GENERATE
      </Button>
    </div>
  );
}
