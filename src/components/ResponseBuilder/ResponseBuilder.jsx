import React, { useContext, useState } from "react";
import { Context } from "../../contexts/ResponseContext";
import ResponseStatusSelector from "../ResponseStatusSelector";
import ResponseActions from "../ResponseActions";
import { Wrapper } from "./styles";

const ResponseBuilder = ({
  id,
  editing,
  status: actualStatus,
  responseBody: actualResponseBody,
}) => {
  const [status, setStatus] = useState(actualStatus);
  const [responseBody, setResponseBody] = useState(actualResponseBody);

  const { updateResponse } = useContext(Context);

  const handleOnChangeResponseBody = ({ target: { value } }) =>
    setResponseBody(value);

  const handleOnChangeStatus = (newStatus) => setStatus(newStatus);

  const onSaveCallback = () =>
    updateResponse({
      id,
      status,
      responseBody,
    });

  const responseBodyComponent = editing ? (
    <textarea value={responseBody} onChange={handleOnChangeResponseBody} />
  ) : (
    responseBody
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
        onSaveCallback={onSaveCallback}
      />
    </Wrapper>
  );
};

export default ResponseBuilder;
