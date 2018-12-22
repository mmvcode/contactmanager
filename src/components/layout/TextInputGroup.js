import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({
  label,
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor="name">{label}</label>
      <input
        type={type}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

TextInputGroup.defaultProps = {
  type: 'text'
};

export default TextInputGroup;
