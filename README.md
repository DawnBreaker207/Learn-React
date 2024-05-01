# Learn-React

### Components

### Reusable Building Blocks

- Create a small building blocks & compose the UI from them

### Related Code Lives Together

- Related HTML & JS (and possibly CSS) code is stored together

### Separation of Concerns

- Different components handle different data & logic

### Props

- React allows to pass data to components via a concept called "Props"

### Components Composition

- A components can wrap other components or other content

### "Children" Prop vs "Attribute Props"

- Using "Children"

```JSX
  <TabButton>Components</TabButton>
  //
  function TabButton({children}){
    return <button>{children}</button>
  }
```

- For components that take a **single piece of renderable content**, this approach is closer to "normal HTML usage"
- This approach is **especially convenient** when passing **JSX code as a value** to another component

- Using Attributes

```JSX
 <TabButton label="Components"></TabButton>
  //
  function TabButton({label}){
    return <button>{label}</button>
  }
```

- This approach make sense if you got **multiple smaller pieces of information** that must be passed to a component
- Adding **extra props** instead of just wrapping the content with the components tags mean **extra work**

### Fragments

### Splitting components by feature & state
