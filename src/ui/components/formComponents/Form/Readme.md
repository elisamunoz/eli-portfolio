
```jsx
import Button from 'ui/components/Button';
import { Form, Field } from 'ui/components/formComponents';

<Form onSubmit={(v) => console.log(v)}>
  <Field
    name='name'
    label='User Name'
    placeholder="e.g. U. Name"
  />
  <Field
    type='textarea'
    label='Comment'
    name='description'
    placeholder="Notes"
  />
  <Button>Submit</Button>
</Form>
```

### With initial values
```jsx
import Button from 'ui/components/Button';
import { Form, Field } from 'ui/components/formComponents';

<Form
  onSubmit={(v) => console.log(v)}
  iniValues={{
    name: 'Name',
    description: 'Content'
  }}
>
  <Field
    name='name'
    label='User Name'
    placeholder="e.g. U. Name"
  />
  <Field
    type='textarea'
    label='Comment'
    name='description'
    placeholder="Notes"
  />
  <Button>Submit</Button>
</Form>
```

### Using custom components
```jsx
import Button from 'ui/components/Button'
;
import { Form, InputText, Textarea } from 'ui/components/formComponents';

<Form onSubmit={(v) => console.log(v)}>
  <InputText
    label='User Name'
    name='user'
    placeholder="e.g. U. Name"
  />
  <Textarea
    label='User Name'
    name='user'
    placeholder="e.g. Bla bla"
  />
  <Button>Submit</Button>
</Form>
```
