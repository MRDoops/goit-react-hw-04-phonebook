import React from 'react';
import PropTypes from 'prop-types';

import { Input } from './filter.styled';

const Filter = ({ value, onChange }) => (
  <label>
    <Input type="text" value={value} onChange={onChange} />
  </label>
);
export default Filter;

Filter.propeTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
