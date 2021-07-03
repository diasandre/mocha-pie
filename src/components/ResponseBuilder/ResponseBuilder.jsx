import React, { useContext, useState } from "react";
import { Context } from "../../contexts/ResponseContext";
import ResponseStatusSelector from "../ResponseStatusSelector";
import ResponseActions from "../ResponseActions";
import { Wrapper } from "./styles";
import { isValidJson } from "../../helper/jsonHelper";
import JsonComponent from "../JsonComponent";

const ResponseBuilder = ({
  id,
  editing,
  status: actualStatus,
  responseBody: actualResponseBody,
}) => {
  const [status, setStatus] = useState(actualStatus);
  const [responseBody, setResponseBody] = useState(actualResponseBody);

  const { updateResponse } = useContext(Context);

  const handleOnChangeResponseBody = ({ target: { value } }) => {
    setResponseBody({
      rawValue: value,
      jsonObject: isValidJson(value, false),
    });
  };

  const handleOnChangeStatus = (newStatus) => setStatus(newStatus);

  const onSaveCallback = () =>
    updateResponse({
      id,
      status,
      responseBody: {
        rawValue: responseBody?.rawValue,
        jsonObject: isValidJson(responseBody?.rawValue, true),
      },
    });

  const responseBodyComponent = editing ? (
    <textarea
      value={responseBody?.rawValue}
      onChange={handleOnChangeResponseBody}
    />
  ) : (
    <JsonComponent responseBody={responseBody} />
  );

  return (
    <Wrapper>
      <ResponseStatusSelector
        status={status}
        editing={editing}
        onChangeCallback={handleOnChangeStatus}
      />
      {responseBodyComponent}
      <ResponseActions
        id={id}
        editing={editing}
        shouldAllowSave={
          status != null && status.lenght > 0 && responseBody != null
        }
        onSaveCallback={onSaveCallback}
      />
    </Wrapper>
  );
};

export default ResponseBuilder;
