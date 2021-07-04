import React from 'react';
import Select from 'react-select';
import { httpStatusGrouped } from '../../constants/httpStatus';
import { customStyle, customTheme, SelectWrapper } from './styles';

const formatGroupLabel = ({ label }) => <span>{label}</span>;

const ResponseStatusSelector = ({ status, editing, onChangeCallback }) => (
  <SelectWrapper>
    <Select
      value={status}
      isDisabled={!editing}
      options={httpStatusGrouped}
      formatGroupLabel={formatGroupLabel}
      styles={customStyle}
      onChange={onChangeCallback}
      theme={customTheme}
      placeholder="HTTP status"
    />
  </SelectWrapper>
);

export default ResponseStatusSelector;
