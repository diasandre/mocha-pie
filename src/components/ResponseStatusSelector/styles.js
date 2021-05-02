import styled from "styled-components";

export const SelectWrapper = styled.div`
  min-width: 180px;
  margin-right: 20px;
`;

export const customStyle = {
  control: (base) => ({
    ...base,
    border: 0,
  }),
};

export const customTheme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: "#dabfea",
    primary50: "#dabfea",
    primary: "#7400b8",
  },
});
