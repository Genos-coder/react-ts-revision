# Pure Components/functions

- You cannot state the variable outside the react component directly and can't do the operations like increment , because this will cause unexpected behavior below are hypothetical examples

```
let guest = 0;
function Cup(){
  guest = guest + 1;
}

Cup(); 
console.log(guest); // will print 2 instead of 1 because react render the component two times
```

- But when you use event listeners to increment the value it behave normally

```
let guest = 0;
function Cup(){
  const handleClick =()=>{
   guest = guest + 1;
  }
}
Cup(); 
console.log(guest); 
```


# Submit button conflicts in forms
