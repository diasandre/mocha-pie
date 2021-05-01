import { MenuItem, Select, TextareaAutosize } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { ContextConsumer } from "../../contexts/ResponseContext";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  align-items: flex-start;
  justify-content: center;
  padding: 15px;
  margin-bottom: 10px;
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
  box-shadow: rgb(25 19 38 / 10%) 0px 2px 12px -8px,
    rgb(25 19 38 / 5%) 0px 1px 1px;
`;

const SelectWrapper = styled.div`
  margin-right: 20px;
`;

const ResponseBuilder = () => {
  const [status, setStatus] = useState(200);
  const [responseBody, setResponseBody] = useState(null);

  // const { update } = useContext(ContextConsumer);

  return (
    <Wrapper>
      <SelectWrapper>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="HTTP Status"
          onChange={(value) => setStatus(value)}
        >
          <MenuItem value={200}>200</MenuItem>
          <MenuItem value={404}>404</MenuItem>
          <MenuItem value={500}>500</MenuItem>
        </Select>
      </SelectWrapper>
      <TextareaAutosize
        aria-label="json response here"
        rowsMin={10}
        placeholder="json response here"
      />
    </Wrapper>
  );
};

export default ResponseBuilder;
