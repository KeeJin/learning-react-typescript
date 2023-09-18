# Hooks
React hooks are functions that allow you to "hook into" React state and lifecycle features from functional components. They make it possible to use state, context, refs, and other React features in functional components.
---
## State Hook

## Effect Hook
- data fetching
- DOM manipulation
- runs the effect when the component mounts and whenever the dependencies change

## Context Hook

## Reference Hook
- more suitable for non-UI-related tasks and for integrating with external code that operates outside React's rendering cycle
### What is a ref object in this context?
A ref object is a plain JavaScript object with a single property called ".current". This ".current" property can be used to reference and store values or mutable data. The ref object itself does not directly reference a DOM element or any specific object; instead, it serves as a container for the ".current" property.

The ref object doesn't inherently reference anything. It is a container that you can use to create references to other objects or values. You can think of it as a mutable container for data that persists between renders without causing re-renders.

You decide what the .current property of the ref object references. For example, you can use it to reference DOM elements, store values, access child component instances, or cache computed results. It provides a way to persist data across renders without triggering React component updates.

Example: 
```
import React, { useRef } from 'react';

function MyComponent() {
  // Create a ref object with an initial value of null
  const myRef = useRef(null);

  // Use the ref to reference a DOM element
  const handleButtonClick = () => {
    // Assign the DOM element to the .current property
    myRef.current = document.getElementById('myElement');

    // Now, you can work with the DOM element directly
    if (myRef.current) {
      myRef.current.style.backgroundColor = 'blue';
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Change Color</button>
      <div id="myElement">This is a div element</div>
    </div>
  );
}

```

## Custom Hook

## Additional Notes: 
- Hooks must be called at the top level of a component. Do not call hooks inside loops, conditions, or nested functions.
- Hooks must be called in function components or custom hooks, not in regular JavaScript functions.