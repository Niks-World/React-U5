- How to attach React and Babel in our application . 
- How can we render our application on UI . 
- JSX => HTML inside JS => () , JS inside HTML => {}interpolation , React.Fragment


```jsx
return (

   <React.Fragment> // <>
    <div></div>
    <section></section>
  </React.Fragment> // </>
)
```


- Component based Architecture => SPA => just one root => just one tag which can act as a parent of all tags

- componenet => separate functions

- pass properties from parent component to child component => props = {} =>  child ({destructure the prps})

- DOM vs ReactDOM (VDOM (Virtual DOM (photocopy of the updated dom  , once the events are done triggering the browser with check with original DOM whats the difference between OGdom and Vdom , and then just update the specific component which was changed . )))

- let [state , setState] =  React.useState(initialValue (by Default value))

- state => provides the current state (or think of it as current value)

- setState => updated the previous state and re-renders that particular component.