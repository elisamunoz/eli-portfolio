import React from 'react';
import 'assets/styles/index.scss';
import Home from './home';
import Portfolio from './portfolio';
import About from './about'
import Contact from './contact';

import Button from 'ui/components/Button';
import { Form, Field, Textarea, InputText } from 'ui/components/formComponents';

const Page = () => (
  <>
    <Home />

    <Form
      onSubmit={(v) => console.log(v)}
      iniValues={{
        user: 'abc',
        content: 'bla blas'
      }}
    >
      <InputText
        label='User Name'
        name='user'
        placeholder="e.g. Bla bla"
      />
      <Textarea
        label='User Name'
        name='user'
        placeholder="e.g. Bla bla"
      />
      <Field
        label='User Name'
        name='user'
        placeholder="e.g. Bla bla"
      />
      <Field
        type='textarea'
        label='Comment'
        name='content'
        placeholder="Notes"
      />
      <Button>
        Submit
      </Button>
    </Form>

    <Portfolio />
    <About />
    <Contact />
  </>
);

export default Page;
