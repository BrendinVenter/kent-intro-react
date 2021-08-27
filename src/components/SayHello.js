import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form';

function useLocalStorageState(key, defaultValue = '') {
  const [state, setState] = useState(
    () => window.localStorage.getItem(key) || defaultValue
  );

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}

const SayHello = () => {
  const [firstName, setFirstName] = useLocalStorageState('first_name');
  const [lastName, setLastName] = useLocalStorageState('last_name');

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  return (
    <div>
      <Form
        firstNameChange={handleFirstName}
        lastNameChange={handleLastName}
        firstName={firstName}
      />
      <div>
        {firstName !== '' ? (
          <p>
            Hello {firstName} {lastName}!{' '}
          </p>
        ) : (
          <p>Please enter a name...</p>
        )}
      </div>
    </div>
  );
};

export default SayHello;
