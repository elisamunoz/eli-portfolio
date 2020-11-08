import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import Wrapper from 'ui/components/formComponents/FieldWrapper';
import styles from './Textarea.module.scss';

export const Textarea = (props) => {
  const { name, placeholder, disabled = false  } = props;

  return (
    <Wrapper {...props}>
      <Field name={name}>
        {props => (
          <textarea
            {...props.input}
            id={name}
            className={styles.textarea}
            placeholder={placeholder}
            disabled={disabled}
            rows="4"
          />
        )}
      </Field>
    </Wrapper>
  );
};

Textarea.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};


export default Textarea;