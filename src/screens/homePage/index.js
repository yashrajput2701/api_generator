import React, { useState } from "react";
import ButtonComponent from "../../components/buttons";
import Header from "../../components/header";
import BasicTextFields from "../../components/inputField";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import axios from "axios";
export default function HomePage() {
  // const [statusMessage, setStatusMessage] = useState("TBD");

  // const fetchData = () => {
  //   debugger;
  //   fetch("https://automobilevintagespa.000webhostapp.com/")
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setStatusMessage(response.status);
  //     })
  //     .catch(() => {
  //       setStatusMessage("ERROR");
  //     });
  // };
  // console.log(fetchData, "message");
  const [formValue, setformValue] = React.useState("");

  const handleChange = (event) => {
    console.log(event, "event");
    setformValue(event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // store the states in the form data
    const loginFormData = new FormData();
    loginFormData.append("input", formValue);

    try {
      // debugger;
      // make axios post request
      const response = await axios({
        method: "POST",
        url: "http://automobilevintagespa.000webhostapp.com/apicreate.php",
        data: loginFormData,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      console.log(response, "response");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      <form onSubmit={(e) => handleSubmit(e)}>
        <TextField
          id="outlined-basic"
          label="Input"
          variant="outlined"
          multiline
          rows={6}
          value={formValue}
          onChange={(event) => handleChange(event)}
        />
        {/* <BasicTextFields /> */}
        {/* API Status: {statusMessage} */}
        {/* <ButtonComponent handleClick={fetchData} /> */}
        <Button
          variant="contained"
          color="white"
          type="submit"
          // className={classes.button}
          // endIcon={<GppGoodIcon></GppGoodIcon>}
          // onClick={() => fetchData()}
        >
          GENERATE
        </Button>
      </form>
    </>
  );
}
