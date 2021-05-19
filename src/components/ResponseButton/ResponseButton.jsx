import React, { useState } from "react";
import ReactiveButton from "reactive-button";
import { ButtonContainer } from "./styles";
import { TextField } from "@material-ui/core";
import { save } from "../../services/apiService";

const ResponseButton = ({ responses, uuid, onCallback }) => {
  const [state, setState] = useState("idle");

  const onClickHandler = () => {
    setState("loading");

    const mappedData = responses.map((item) => {
      return {
        ...item,
        responseBody: item.responseBody.rawValue,
      };
    });

    save(mappedData).then(({ data }) => {
      setState("success");
      onCallback(data);
    });
  };

  return (
    <ButtonContainer>
      <TextField
        className="result"
        label={uuid == null ? "Generate to publish your mocked api" : uuid}
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
        disabled={uuid != null}
      />
    </ButtonContainer>
  );
};

export default ResponseButton;
