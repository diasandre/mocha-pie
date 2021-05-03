import React, { useContext } from "react";
import { Context } from "../../contexts/ResponseContext";
import { VscJson } from "react-icons/vsc";
import {
  RiDeleteBinFill,
  RiPencilFill,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import { ActionsContainer } from "./styles";
import { IconButton, Tooltip } from "@material-ui/core";

const IconWithTooltip = ({ title, children }) => {
  return (
    <Tooltip title={title} placement="right" arrow>
      <IconButton size="small" className="icon-button">
        {children}
      </IconButton>
    </Tooltip>
  );
};

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
    <IconWithTooltip title="Save">
      <RiCheckboxCircleFill onClick={() => handleOnChangeEditing(null)} />
    </IconWithTooltip>
  ) : (
    <IconWithTooltip title="Edit">
      <RiPencilFill onClick={() => handleOnChangeEditing(id)} />
    </IconWithTooltip>
  );

  const showEditIcon = editing || (!editing && canEdit) ? editIcon : <></>;

  return (
    <ActionsContainer>
      {showEditIcon}
      <IconWithTooltip title="Format">
        <VscJson />
      </IconWithTooltip>
      {canRemove ? (
        <IconWithTooltip title="Remove">
          <RiDeleteBinFill onClick={() => removeResponse(id)} />
        </IconWithTooltip>
      ) : (
        <></>
      )}
    </ActionsContainer>
  );
};

export default ResponseActions;
