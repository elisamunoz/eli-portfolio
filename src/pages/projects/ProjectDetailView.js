import React, { useEffect } from 'react';
import Section from 'ui/components/Section';

const View = (props) => {
  useEffect(()=> {
    window.scrollTo(0, 0);
  },
  []);

  return (
    <Section {...props} />
  );
};

export default View;
