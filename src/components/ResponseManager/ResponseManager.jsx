import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ContextProvider } from '../../contexts/ResponseContext';
import AddButton from '../AddButton';
import ResponseBuilder from '../ResponseBuilder/ResponseBuilder';
import ResponseButton from '../ResponseButton';
import { Container } from './styles';
import { isValidJson } from '../../helper/jsonHelper';

const defaultItem = () => ({
  id: uuidv4(),
  status: null,
  responseBody: null,
});

const ResponseManager = () => {
  const [uuid, setUuid] = useState(null);
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

  const onSaveHandler = (newUUID) => {
    setUuid(newUUID);
  };

  const onGetHandler = (actualUUID, values) => {
    const mappedValues = values.map((item) => ({
      ...item,
      responseBody: {
        rawValue: item.responseBody,
        jsonObject: isValidJson(item.responseBody, false),
      },
    }));

    setUuid(actualUUID);
    setResponses(mappedValues);
    setEditing(mappedValues[0].id);
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
        <ResponseButton
          uuid={uuid}
          responses={responses}
          onSaveCallback={onSaveHandler}
          onGetCallback={onGetHandler}
        />
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
