import React, { useContext } from "react";
import { BsPlusCircle } from "react-icons/bs";
import styled from "styled-components";
import { Context } from "../../contexts/ResponseContext";

const AddButtonWrapper = styled.div`
  border-radius: 16px;
  font-size: 1.5em;
  color: #7400b8;

  &:hover {
    background: #f3f3f3;
    cursor: pointer;
    font-size: 1.54em;
  }
`;

const AddButton = () => {
  const { addResponse } = useContext(Context);

  return (
    <AddButtonWrapper onClick={addResponse}>
      <BsPlusCircle />
    </AddButtonWrapper>
  );
};

export default AddButton;
