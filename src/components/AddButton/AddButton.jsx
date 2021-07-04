import React, { useContext } from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import { IconButton } from '@material-ui/core';
import { Context } from '../../contexts/ResponseContext';

const AddButton = () => {
  const { addResponse } = useContext(Context);

  return (
    <IconButton size="medium" className="icon-button" onClick={addResponse}>
      <BsPlusCircle />
    </IconButton>
  );
};

export default AddButton;
