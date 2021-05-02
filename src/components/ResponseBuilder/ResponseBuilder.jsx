import React, { useContext, useState } from "react";
import { Context } from "../../contexts/ResponseContext";
import styled from "styled-components";
import ResponseStatusSelector from "../ResponseStatusSelector";
import ResponseActions from "../ResponseActions";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import { httpStatus } from "../../constants/httpStatus";

const Wrapper = styled.div`
  display: flex;
  width: 60%;
  align-items: flex-start;
  justify-content: space-between;
  padding: 15px;
  margin-bottom: 10px;
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
  box-shadow: rgb(25 19 38 / 10%) 0px 2px 12px -8px,
    rgb(25 19 38 / 5%) 0px 1px 1px;
`;

const callToUpdate = async (n1, callback) => callback(n1);
const debounceCall = AwesomeDebouncePromise(callToUpdate, 1000);

const getStatus = (value) =>
  value != null ? httpStatus.find((item) => item.value === value) : null;

const ResponseBuilder = ({
  id,
  status: actualStatus,
  responseBody: actualResponseBody,
}) => {
  const [status, setStatus] = useState(getStatus(actualStatus));
  const [responseBody, setResponseBody] = useState(actualResponseBody);

  const { isUniqueStatus, updateResponse, addOrUpdateStatus } = useContext(
    Context
  );

  const handleOnChangeResponseBody = ({ target: { value } }) => {
    if (status != null) {
      setResponseBody(value);
      debounceCall(
        { id, status: status.value, responseBody: value },
        updateResponse
      );
    }
  };

  const handleOnChangeStatus = (newStatus) => {
    if (isUniqueStatus(newStatus.value)) {
      setStatus(newStatus);
      addOrUpdateStatus({
        id,
        newStatus: newStatus.value,
        responseBody,
      });
    }
  };

  return (
    <Wrapper>
      <ResponseStatusSelector
        status={status}
        onChangeCallback={handleOnChangeStatus}
      />
      <textarea value={responseBody} onChange={handleOnChangeResponseBody} />
      <ResponseActions />
    </Wrapper>
  );
};

export default ResponseBuilder;
