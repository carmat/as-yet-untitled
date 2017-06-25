# RULES

## Generic

1. React DOM uses camelCase property naming convention instead of HTML attribute names.
2. Always start component names with a capital letter.
3. Components must return a single root element.
4. All React components must act like pure functions with respect to their props.

## State

1. With many components, it's very important to free up resources taken by the components when they are destroyed i.e. "lifecycle hooks"
    a) `componentDidMount()` - mounting, for first time rendering
    b) `componentWillUnmount()` - unmounting, for when DOM component is removed
2. The only place where you can assign this.state is the constructor.
3. If you don't use something in render(), it shouldn't be in the state.
4. Do not modify state directly - use `setState()`.
5. State updates may be asynchronous - use a second form of `setState()` that accepts a function rather than an object.
6. State updates are merged - React merges the object you provide into the current state.
7. The data flows down - neither parent nor child components can know if a certain component is stateful or stateless.

## Events

1. Namespace: camelCase
2. Binding is necessary to make `this` work in the callback

## Conditional Rendering

1.

[Docs Bookmark](https://facebook.github.io/react/docs/conditional-rendering.html)
