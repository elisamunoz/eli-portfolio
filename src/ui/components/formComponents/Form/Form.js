import React from 'react';
import PropTypes from 'prop-types';
import { Form as RFFForm } from 'react-final-form';

const Form = ({ children, className, onSubmit, iniValues = {} }) => {
  const handleSubmit = (values) => {
    // TODO: check if it is valid
    onSubmit(values);
  }

  return (
    <RFFForm
      onSubmit={handleSubmit}
      initialValues={iniValues}
      // validate={formValidate}
      render={({ handleSubmit, values }) => {
        // const valid = formIsValid(values);

        return (
          <form onSubmit={handleSubmit} className={className}>
            {children}
          </form>
        )
      }}
    />
  );
};

Form.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  iniValues: PropTypes.object,
};

export default Form;

