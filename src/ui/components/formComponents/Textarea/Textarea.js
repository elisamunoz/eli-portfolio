import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import Wrapper from 'ui/components/formComponents/FieldWrapper';
import styles from './Textarea.module.scss';

export const Textarea = (props) => {
  const { name } = props;

  return (
    <Wrapper {...props}>
      <Field name={name}>
        {props => (
          <textarea
            {...props.input}
            id={name}
            className={styles.textarea}
            rows="4"
          />
        )}
      </Field>
    </Wrapper>
  );
};

Textarea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
};


export default Textarea;