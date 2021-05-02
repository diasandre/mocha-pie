import React from "react";
import Select from "react-select";
import styled from "styled-components";
import { httpStatusGrouped } from "../../constants/httpStatus";

const SelectWrapper = styled.div`
  min-width: 180px;
  margin-right: 20px;
`;

const customStyle = {
  control: (base) => ({
    ...base,
    border: 0,
  }),
};

const customTheme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: "#dabfea",
    primary50: "#dabfea",
    primary: "#7400b8",
  },
});

const formatGroupLabel = (data) => <span>{data.label}</span>;

const ResponseStatusSelector = ({
  status,
  onChangeCallback = (value) => console.log(value),
}) => {
  return (
    <SelectWrapper>
      <Select
        value={status}
        options={httpStatusGrouped}
        formatGroupLabel={formatGroupLabel}
        styles={customStyle}
        onChange={onChangeCallback}
        theme={customTheme}
        placeholder="HTTP status"
      />
    </SelectWrapper>
  );
};

export default ResponseStatusSelector;
