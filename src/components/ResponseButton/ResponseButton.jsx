import React, { useState } from "react";
import ReactiveButton from "reactive-button";
import { ButtonContainer } from "./styles";
import { TextField } from "@material-ui/core";
import { get, save } from "../../services/apiService";

const ResponseButton = ({ responses, uuid, onSaveCallback, onGetCallback }) => {
  const [state, setState] = useState("idle");
  const [searchField, setSearchField] = useState(uuid);

  const onClickHandler = () => {
    setState("loading");
    if (uuid == null && searchField != null) {
      getData();
    } else {
      saveData();
    }
  };

  const getData = () => {
    get(searchField).then(({ data: { uuid, values } }) => {
      onGetCallback(uuid, values);
      setState("success");
      setSearchField(null);
    });
  };

  const saveData = () => {
    const mappedData = responses.map((item) => {
      return {
        ...item,
        responseBody: item.responseBody.rawValue,
      };
    });

    save(mappedData).then(({ data }) => {
      onSaveCallback(data);
      setState("success");
    });
  };

  const handleChange = ({ target: { value } }) => {
    setSearchField(value);
  };

  return (
    <ButtonContainer>
      <TextField
        className="result"
        variant="outlined"
        color="primary"
        onChange={handleChange}
        disabled={uuid != null}
        label={uuid == null ? "Search your UUID" : "Generated UUID"}
        value={searchField != null ? searchField : uuid}
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
