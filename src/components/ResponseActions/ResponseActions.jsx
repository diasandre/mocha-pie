import React from "react";
import styled from "styled-components";

import { VscJson } from "react-icons/vsc";
import { RiDeleteBinFill } from "react-icons/ri";

const ActionsContainer = styled.div`
  min-width: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #7400b8;
`;

const ActionWrapper = styled.div`
  border-radius: 16px;
  cursor: pointer;
  margin-bottom: 5px;

  &:hover {
    background: #f3f3f3;
  }
`;

const Action = ({ children }) => {
  return <ActionWrapper>{children}</ActionWrapper>;
};

const ResponseActions = () => {
  return (
    <ActionsContainer>
      <Action>
        <VscJson />
      </Action>
      <Action>
        <RiDeleteBinFill />
      </Action>
    </ActionsContainer>
  );
};

export default ResponseActions;
