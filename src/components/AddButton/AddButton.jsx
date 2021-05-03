import React, { useContext } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { Context } from "../../contexts/ResponseContext";
import { IconButton } from "@material-ui/core";

const AddButton = () => {
  const { addResponse } = useContext(Context);

  return (
    <IconButton size="medium" className="icon-button" onClick={addResponse}>
      <BsPlusCircle />
    </IconButton>
  );
};

export default AddButton;
