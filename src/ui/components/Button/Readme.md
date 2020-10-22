Basic button:

```jsx padded
<Button>Push Me</Button>
<Button>Click Me</Button>
<Button>Tap Me</Button>
```


Disabled:

```jsx padded
<Button>Active</Button>
<Button disabled>Disabled</Button>
```


onClick actions:

```jsx
const [isOpen, setisOpen] = React.useState(false);

<div>
  <Button
    onClick={() => setisOpen(true)}
    disabled={isOpen}
  >
    Show Me
  </Button>
  {isOpen && (
    <Button onClick={() => setisOpen(false)}>
      Hide Me
    </Button>
  )}
</div>
```
