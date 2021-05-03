import React, { useState } from "react";
import ReactiveButton from "reactive-button";
import { ButtonContainer } from "./styles";
import { TextField } from "@material-ui/core";

const ResponseButton = () => {
  const [state, setState] = useState("idle");

  const onClickHandler = () => {
    setState("loading");
    setTimeout(() => {
      setState("success");
    }, 2000);
  };

  return (
    <ButtonContainer>
      <TextField
        className="result"
        label="Generate to publish your mocked api"
        variant="outlined"
        color="secondary"
        disabled={true}
      />
      <ReactiveButton
        style={{
          backgroundColor: "#7400b8",
        }}
        buttonState={state}
        onClick={onClickHandler}
        idleText={"Generate"}
      />
    </ButtonContainer>
  );
};

export default ResponseButton;
