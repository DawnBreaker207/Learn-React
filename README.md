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

### Forwarded props (proxy props)

### public/ vs assets/ fro Image Storage

- _public/_: are made **publicly available** by the underlying project development server & build process
- Any files stored in **src** are **not made available to the public**. They can't be accessed by website visitors

### Updating state based on old state

```JSX
setIsEditing(!isEditing)
```

- If your **new state depends on your previous state** value, you should **NOT** update the state like this

- Instead

```JSX
setIsEditing(wasEditing => !wasEditing)
```

- **Pass a function** to your state updating function
- This function will **automatically be called** by React and will receive the **guaranteed lasted state value**

### Two-way binding

### Update Object-State Immutably

- Should **not mutate** **Objects & arrays ** directly
- Instead create a **(deep) copy** first

```JSX
// Not creating a copy
const updateUser = user;
user.name = 'Anh
```

```JSX
// Creating a copy via JS "Spread" operator
const updateUser = {...user}
updateUser.name = 'Anh
```

### Lifting State up

- Lift the state up to the **closest ancestor component** that has access to all components that need to work with that state
