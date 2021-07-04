import React, { useState } from 'react';
import ReactiveButton from 'reactive-button';
import { TextField } from '@material-ui/core';
import { toast } from 'react-toastify';
import { ButtonContainer } from './styles';
import { get, save } from '../../services/apiService';

const ResponseButton = ({ responses, uuid, onSaveCallback, onGetCallback }) => {
  const [state, setState] = useState('idle');
  const [searchField, setSearchField] = useState(uuid == null ? '' : uuid);

  const getData = () => {
    get(searchField)
      .then(({ data: { uuid: dataUUID, values } }) => {
        onGetCallback(dataUUID, values);
        setState('success');
        setSearchField(null);
      })
      .catch(
        ({
          response: {
            data: { reason },
          },
        }) => {
          toast.error(reason);
          setState('error');
        },
      );
  };

  const saveData = () => {
    const isResponsesValid =
      responses.filter(
        (item) =>
          item.responseBody != null && item.status != null && item.responseBody.jsonObject != null,
      ).length < responses.length;

    if (responses == null || responses.length < 1 || isResponsesValid) {
      toast.warning('add some valid responses pls');
      setState('error');
      return;
    }

    const mappedData = responses.map((item) => ({
      ...item,
      responseBody: item.responseBody.rawValue,
    }));

    const data = {
      uuid,
      values: mappedData,
    };

    save(data)
      .then(({ data: newData }) => {
        onSaveCallback(newData);
        setState('success');
      })
      .catch(
        ({
          response: {
            data: { reason },
          },
        }) => {
          toast.error(reason);
          setState('error');
        },
      );
  };

  const onClickHandler = () => {
    setState('loading');
    if (uuid == null && searchField != null && searchField.length > 0) {
      getData();
    } else {
      saveData();
    }
  };

  const handleChange = ({ target: { value } }) => {
    setSearchField(value);
  };

  const isUpdateState = uuid != null;
  const textFieldLabel = !isUpdateState ? 'Search or generate your UUID' : '';
  const textFieldValue = isUpdateState ? uuid : searchField;

  const searchOrGenerateLabel =
    searchField != null && searchField.length > 0 ? 'Search' : 'Generate';

  const buttonLabel = isUpdateState ? 'Update' : searchOrGenerateLabel;

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
          backgroundColor: '#7400b8',
        }}
        buttonState={state}
        onClick={onClickHandler}
        idleText={buttonLabel}
      />
    </ButtonContainer>
  );
};

export default ResponseButton;
