Card component:

```jsx
import img from 'assets/img/demo/demo.jpg';

<Card
  title="My title"
  desc="bla bla bla"
  image={img}
  onClickMore={() => alert('Button clicked!!')}
/>
```

### Grouped Cards - Card.Groupn
```jsx
import img from 'assets/img/demo/demo.jpg';
<Card.Group>
  <Card
    title="My title"
    desc="bla bla bla"
    image={img}
    onClickMore={() => alert('Button clicked!!')}
  />
  <Card
    title="My title"
    desc="bla bla bla"
    image={img}
    onClickMore={() => alert('Button clicked!!')}
  />
  <Card
    title="My title"
    desc="bla bla bla"
    image={img}
  />
  <Card
    title="My title"
    desc="bla bla bla"
    image={img}
    onClickMore={() => alert('Button clicked!!')}
  />
</Card.Group>
```
