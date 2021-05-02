import React, { useContext } from "react";
import { Context } from "../../contexts/ResponseContext";
import { VscJson } from "react-icons/vsc";
import {
  RiDeleteBinFill,
  RiPencilFill,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import { ActionsContainer, ActionWrapper } from "./styles";

const ResponseActions = ({ id, editing, onSaveCallback }) => {
  const { canEdit, canRemove, setEditing, removeResponse } = useContext(
    Context
  );

  const handleOnChangeEditing = (value) => {
    if (value == null) {
      setEditing(value);
      onSaveCallback();
    } else {
      setEditing(value);
    }
  };

  const editIcon = editing ? (
    <RiCheckboxCircleFill onClick={() => handleOnChangeEditing(null)} />
  ) : (
    <RiPencilFill onClick={() => handleOnChangeEditing(id)} />
  );

  const showEditIcon = editing || (!editing && canEdit) ? editIcon : <></>;

  return (
    <ActionsContainer>
      <ActionWrapper>{showEditIcon}</ActionWrapper>
      <ActionWrapper>
        <VscJson />
      </ActionWrapper>
      {canRemove ? (
        <ActionWrapper>
          <RiDeleteBinFill onClick={() => removeResponse(id)} />
        </ActionWrapper>
      ) : (
        <></>
      )}
    </ActionsContainer>
  );
};

export default ResponseActions;
