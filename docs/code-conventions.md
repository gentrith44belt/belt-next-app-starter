# Belt React code conventions 


## File and folders
For new files or folders, use `kebab-case` convention. This includes creating components, utils, hooks, and other type of files.
- `user-account.tsx` (component)
- `use-window-width.ts` (custom hook)
- `use-login-form.ts` (custom hook)
- `yup-validations.ts` (helper)




## Components
- For new components use React function declaration convention and [PascalCase](https://techterms.com/definition/pascalcase) for component name
- Define component props using ComponentName and Props suffix e.g. `ComponentNameProps`
```typescript jsx
// Example 

interface ComponentNameProps {
    text: string
}

export default function ComponentName({text}: ComponentNameProps) {
    return <div>{text}</div>
}
```
- Always use `camelCase` for prop names, or `PascalCase` if the prop value is a React component.
- Use descriptive names for props to clearly indicate their purpose. Avoid abbreviations or acronyms unless they are widely understood in the context of your project.
```typescript jsx
// Good
<Foo
    userName="hello"
    phoneNumber={12345678}
    Component={SomeComponent}
/>


// Bad
<Foo
    usrName="hello"
    phoneNr={12345678}
    Cmp={SomeComponent}
/>
```



## Hooks
- For new hooks use Arrow functions
- Hooks should start with use. e.g. `useWindowWidth` 
```typescript jsx
export const useWindowWidth = () => {
    return window.innerWidth
}
```



## Helper functions
- For new helper functions use Arrow functions
- When creating new helpers, write a short JSDoc to explain the purpose of that function
```typescript
/**
 * Returns the sum of the provided numbers
 * @param a
 * @param b
 */
export const sum = (a: number, b:number) => a + b;
```



## Memoization
Try to memoize only expensive functions and calculations. Sometimes using `useMemo` or `useCallback` is more expensive rather than recreating the functions/values.
So try to do this when it makes sense.


## Variables
- Use `camelCase` to declare variables
- Prefix state variables with `is`, `has`, or `should` to denote boolean values.
```typescript jsx
const [isActive, setIsActive] = useState(false);
const [hasError, setHasError] = useState(false);
const [shouldRevalidate, setShouldRevalidate] = useState(false)
```
- Use uppercase letters with underscores (CONSTANT_CASE) to represent constants in JavaScript. For example, `API_URL`, `MAX_RESULTS`.


## Event handlers
- Use handle as a prefix for event handler functions. For example, handleClick, handleInputChange
- Use memoization when needed
- Use arrow functions
```typescript jsx
const handleOnInputChange = (event: React.ChangeEvent) => {}

const handleOnButtonClick = () => {}
```