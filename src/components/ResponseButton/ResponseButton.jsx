import React, { useState } from "react";
import ReactiveButton from "reactive-button";
import { ButtonContainer } from "./styles";
import { TextField } from "@material-ui/core";
import { get, save } from "../../services/apiService";
import { toast } from "react-toastify";

const ResponseButton = ({ responses, uuid, onSaveCallback, onGetCallback }) => {
  const [state, setState] = useState("idle");
  const [searchField, setSearchField] = useState(uuid == null ? "" : uuid);

  const onClickHandler = () => {
    setState("loading");
    if (uuid == null && searchField != null) {
      getData();
    } else {
      saveData();
    }
  };

  const getData = () => {
    get(searchField)
      .then(({ data: { uuid, values } }) => {
        onGetCallback(uuid, values);
        setState("success");
        setSearchField(null);
      })
      .catch(
        ({
          response: {
            data: { reason },
          },
        }) => {
          toast.error(reason);
          setState("error");
        }
      );
  };

  const saveData = () => {
    const mappedData = responses.map((item) => {
      return {
        ...item,
        responseBody: item.responseBody.rawValue,
      };
    });

    const data = {
      uuid,
      values: mappedData,
    };

    save(data)
      .then(({ data }) => {
        onSaveCallback(data);
        setState("success");
      })
      .catch(
        ({
          response: {
            data: { reason },
          },
        }) => {
          toast.error(reason);
          setState("error");
        }
      );
  };

  const handleChange = ({ target: { value } }) => {
    setSearchField(value);
  };

  const isUpdateState = uuid != null;
  const textFieldLabel = !isUpdateState ? "Search your UUID" : "";
  const textFieldValue = isUpdateState ? uuid : searchField;

  const searchOrGenerateLabel = searchField.length > 0 ? "Search" : "Generate";

  const buttonLabel = isUpdateState ? "Update" : searchOrGenerateLabel;

  return (
    <ButtonContainer>
      <TextField
        className="result"
        variant="outlined"
        color="primary"
        onChange={handleChange}
        disabled={isUpdateState}
        label={textFieldLabel}
        value={textFieldValue}
      />
      <ReactiveButton
        style={{
          backgroundColor: "#7400b8",
        }}
        buttonState={state}
        onClick={onClickHandler}
        idleText={buttonLabel}
      />
    </ButtonContainer>
  );
};

export default ResponseButton;
