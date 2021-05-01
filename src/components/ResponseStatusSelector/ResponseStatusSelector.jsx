import React from "react";
import Select from "react-select";
import styled from "styled-components";
import { httpStatus } from "../../constants/httpStatus";

const SelectWrapper = styled.div`
  width: 20%;
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
  onChangeCallback = (value) => console.log(value),
}) => {
  return (
    <SelectWrapper>
      <Select
        defaultValue={"200"}
        options={httpStatus}
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
