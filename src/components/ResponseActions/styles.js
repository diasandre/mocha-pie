import styled from "styled-components";

export const ActionsContainer = styled.div`
  min-width: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #7400b8;
`;

export const ActionWrapper = styled.div`
  border-radius: 16px;
  cursor: pointer;
  margin-bottom: 5px;

  &:hover {
    background: #f3f3f3;
  }
`;
