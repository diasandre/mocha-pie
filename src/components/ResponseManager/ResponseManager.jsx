import React, { useState } from "react";
import produce from "immer";
import styled from "styled-components";
import { ContextProvider } from "../../contexts/ResponseContext";
import AddButton from "../AddButton";
import ResponseBuilder from "../ResponseBuilder/ResponseBuilder";
import ResponseButton from "../ResponseButton";
import { v4 as uuidv4 } from "uuid";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const defaultItem = () => ({
  id: uuidv4(),
  status: null,
  responseBody: "",
});

const ResponseManager = () => {
  const [responses, setResponses] = useState([defaultItem()]);

  const addResponse = () => {
    setResponses([...responses, defaultItem()]);
  };

  const isUniqueStatus = (status) =>
    !responses.map((item) => item.status).includes(status);

  const addOrUpdateStatus = ({ id, newStatus, responseBody }) => {
    const newResponses = [
      ...(responses.filter((item) => item.id !== id) || []),
      {
        id,
        status: newStatus,
        responseBody: responseBody,
      },
    ];

    setResponses(newResponses);

    return Promise.resolve(newResponses);
  };

  const updateResponse = ({ id, status, responseBody }) => {
    console.log("teste");
    const newResponses = [
      ...(responses.filter((item) => item.id !== id) || []),
      {
        id,
        status,
        responseBody,
      },
    ];

    setResponses(newResponses);

    return Promise.resolve(newResponses);
  };

  console.log(responses);

  return (
    <ContextProvider
      value={{
        addResponse,
        isUniqueStatus,
        updateResponse,
        addOrUpdateStatus,
      }}
    >
      <Container>
        <ResponseButton />
        {responses.map(({ id, status, responseBody }) => (
          <ResponseBuilder
            id={id}
            status={status}
            responseBody={responseBody}
          />
        ))}
        <AddButton />
      </Container>
    </ContextProvider>
  );
};

export default ResponseManager;
