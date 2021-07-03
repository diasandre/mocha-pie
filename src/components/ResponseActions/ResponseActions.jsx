import React, { useContext } from "react";
import { Context } from "../../contexts/ResponseContext";
import {
  RiDeleteBinFill,
  RiPencilFill,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import { ActionsContainer } from "./styles";
import { IconButton, Tooltip } from "@material-ui/core";
import { toast } from "react-toastify";

const IconWithTooltip = ({ title, children, onClickCallback }) => {
  return (
    <Tooltip title={title} placement="right" arrow>
      <IconButton
        size="small"
        className="icon-button"
        onClick={onClickCallback}
      >
        {children}
      </IconButton>
    </Tooltip>
  );
};

const ResponseActions = ({ id, editing, shouldAllowSave, onSaveCallback }) => {
  const { canEdit, canRemove, setEditing, removeResponse } =
    useContext(Context);

  const handleOnChangeEditing = (value) => {
    if (!shouldAllowSave) {
      toast.warning("fill all fields to save rsrs");
      return;
    }

    if (value == null) {
      setEditing(value);
      onSaveCallback();
    } else {
      setEditing(value);
    }
  };

  const editIcon = editing ? (
    <IconWithTooltip
      title="Save"
      onClickCallback={() => handleOnChangeEditing(null)}
    >
      <RiCheckboxCircleFill />
    </IconWithTooltip>
  ) : (
    <IconWithTooltip
      title="Edit"
      onClickCallback={() => handleOnChangeEditing(id)}
    >
      <RiPencilFill />
    </IconWithTooltip>
  );

  const showEditIcon = editing || (!editing && canEdit) ? editIcon : <></>;

  return (
    <ActionsContainer>
      {showEditIcon}
      {canRemove ? (
        <IconWithTooltip
          title="Remove"
          onClickCallback={() => removeResponse(id)}
        >
          <RiDeleteBinFill />
        </IconWithTooltip>
      ) : (
        <></>
      )}
    </ActionsContainer>
  );
};

export default ResponseActions;
