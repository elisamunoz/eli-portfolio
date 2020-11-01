import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import Wrapper from 'ui/components/formComponents/FieldWrapper';
import styles from './InputText.module.scss';

export const InputText = (props) => {
  const { name, placeholder } = props;

  return (
    <Wrapper {...props}>
      <Field name={name}>
        {props => (
          <input
            {...props.input}
            id={name}
            className={styles.input}
            placeholder={placeholder}
          />
        )}
      </Field>
    </Wrapper>
  );
};

InputText.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
};

export default InputText;