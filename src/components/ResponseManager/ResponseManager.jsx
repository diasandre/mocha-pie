import React, { useState } from "react";
import { ContextProvider } from "../../contexts/ResponseContext";
import AddButton from "../AddButton";
import ResponseBuilder from "../ResponseBuilder/ResponseBuilder";
import ResponseButton from "../ResponseButton";
import { v4 as uuidv4 } from "uuid";
import { Container } from "./styles";

const defaultItem = () => ({
  id: uuidv4(),
  status: null,
  responseBody: null,
});

const ResponseManager = () => {
  const [responses, setResponses] = useState([defaultItem()]);
  const [editing, setEditing] = useState(responses[0].id);

  const addResponse = () => {
    const newResponse = defaultItem();

    if (editing == null) {
      setEditing(newResponse.id);
    }

    setResponses([...responses, newResponse]);
  };

  const removeResponse = (id) => {
    if (editing === id) {
      setEditing(null);
    }

    setResponses(responses.filter((item) => item.id !== id) || []);
  };

  const updateResponse = ({ id, status, responseBody }) => {
    setResponses([
      ...(responses.filter((item) => item.id !== id) || []),
      {
        id,
        status,
        responseBody,
      },
    ]);
  };

  const context = {
    addResponse,
    removeResponse,
    updateResponse,
    setEditing,
    canEdit: editing == null,
    canRemove: responses.length > 1,
  };

  return (
    <ContextProvider value={context}>
      <Container>
        <ResponseButton />
        {responses.map(({ id, status, responseBody }) => (
          <ResponseBuilder
            key={id}
            id={id}
            editing={editing === id}
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
