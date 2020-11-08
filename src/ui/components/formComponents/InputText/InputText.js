import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import Wrapper from 'ui/components/formComponents/FieldWrapper';
import styles from './InputText.module.scss';

export const InputText = (props) => {
  const { name, placeholder, disabled = false } = props;

  return (
    <Wrapper {...props}>
      <Field name={name}>
        {props => (
          <input
            {...props.input}
            id={name}
            className={styles.input}
            placeholder={placeholder}
            disabled={disabled}
          />
        )}
      </Field>
    </Wrapper>
  );
};

InputText.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

export default InputText;