import React, { useContext, useState } from "react";
import { ContextConsumer } from "../../contexts/ResponseContext";
import styled from "styled-components";
import ResponseStatusSelector from "../ResponseStatusSelector";
import ResponseActions from "../ResponseActions";

const Wrapper = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  align-items: flex-start;
  justify-content: space-between;
  padding: 15px;
  margin-bottom: 10px;
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
  box-shadow: rgb(25 19 38 / 10%) 0px 2px 12px -8px,
    rgb(25 19 38 / 5%) 0px 1px 1px;
`;

const ResponseBuilder = ({
  status: actualStatus,
  responseBody: actualResponseBody,
}) => {
  const [status, setStatus] = useState(actualStatus);
  const [responseBody, setResponseBody] = useState(actualResponseBody);

  const { updateResponseBody } = useContext(ContextConsumer);

  return (
    <Wrapper>
      <ResponseStatusSelector />
      <textarea
        value={responseBody}
        onChange={(event) => setResponseBody(event.target.value)}
      />
      <ResponseActions />
    </Wrapper>
  );
};

export default ResponseBuilder;
