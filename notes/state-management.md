# State Management in React

## State vs Props
Props: 
- read-only
- used to pass data
State:
- read and write
- managing data

## Redux
Redux is commonly used in situations where:
1. The application has a large amount of state that needs to be accessed by many components.
2. The application state is updated frequently.
3. The logic to update the application state is complex.

### Concepts
- Actions: events that send data to the Redux store.
- Reducers: takes in current state and received action, returns the new state
- Stores: responsible for holding application state

## Context API
### Concepts
- Providers: define and keep track of specific pieces of state
- Consumers: child component inside Provider. Able to access and modify state provided by context provider