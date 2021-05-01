import React, { useState } from "react";
import ReactiveButton from "reactive-button";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
`;

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
