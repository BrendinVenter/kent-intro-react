import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ firstNameChange, lastNameChange, firstName }) => {
  return (
    <div>
      <form>
        <label htmlFor="firstName">
          First Name:
          <input
            type="text"
            id="firstName"
            onChange={firstNameChange}
            value={firstName ? firstName : null}
          />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <input type="text" id="lastName" onChange={lastNameChange} />
        </label>
      </form>
    </div>
  );
};

Form.propTypes = {
  firstNameChange: PropTypes.func.isRequired,
  lastNameChange: PropTypes.func.isRequired,
};

export default Form;
