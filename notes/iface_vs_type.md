# WIP
In TypeScript, the `interface` keyword is commonly used to define the structure of an object, and it's a versatile way to describe the shape of an object, including optional properties, readonly properties, and method signatures. However, there is another construct in TypeScript called a "type alias" that you can use to define complex types, including those that represent structures similar to a struct.

Here's an example using both an `interface` and a `type` alias to represent a similar structure:

```typescript
// Using interface
interface GamepadDataInterface {
  id: string;
  axes: number[];
}

// Using type alias
type GamepadDataType = {
  id: string;
  axes: number[];
};

const gamepadDataInterface: GamepadDataInterface = {
  id: 'exampleId',
  axes: [0, 1, 0.5],
};

const gamepadDataType: GamepadDataType = {
  id: 'exampleId',
  axes: [0, 1, 0.5],
};
```

In this example, `GamepadDataInterface` and `GamepadDataType` essentially serve the same purpose: they both define an object structure with `id` as a string and `axes` as an array of numbers.

Some differences to note:

- With an `interface`, you can extend or implement it. For example, you can extend one interface from another or implement an interface in a class.

- With a `type` alias, you can create union types, intersection types, and other more complex types.

Both `interface` and `type` are powerful tools in TypeScript, and the choice between them often depends on the specific use case and personal or team preferences. Some developers prefer using `interface` for defining object shapes, while others prefer using `type`. In practice, you can often use either, and the choice may come down to your project's coding style guidelines or personal/team preference.