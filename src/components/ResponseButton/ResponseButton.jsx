import React, { useState } from "react";
import ReactiveButton from "reactive-button";
import { ButtonContainer } from "./styles";

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
