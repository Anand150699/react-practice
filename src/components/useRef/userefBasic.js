
// 🌟 What is useRef?
// ✅ useRef is a React Hook that gives you a reference (a plain object) that:

// Persists across renders (it doesn't reset when the component updates),

// Does not cause a re-render when changed,

// Can store anything: DOM nodes, values, previous states, etc.


import { useRef } from "react";

const myRef = useRef(initialValue);


// initialValue can be anything (null, number, string, object, etc).

// You access or update the value by using myRef.current.

//🎯 Example 1: Focus an Input

import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus(); // focus the input
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

// ✅ Here inputRef points to the <input> element.
// ✅ When button is clicked → focuses the input directly


// 🎯 Example 2: Store a Value Without Causing Re-renders

import { useRef, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Render Count: {renderCount.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

//✅ renderCount.current updates without causing re-render!

// 🔥 Key Points About useRef

// Thing	      |    Behavior

//.current	      |     Holds the actual value
//Value changes	  |     Does not cause re-render
//Common use	  |     Store DOM elements, mutable values, previous values


// 🚀 When To Use useRef
// Situation	                     |   Use useRef?

// Access DOM elements	             |   ✅

// Hold timer IDs or intervals	     |   ✅

// Keep track of previous values	 |   ✅
 
// Store mutable data between renders|	 ✅


//⚡ Quick Real Life Example:

function MyComponent({ name }) {
    const prevName = useRef();
  
    useEffect(() => {
      prevName.current = name;
    }, [name]);
  
    return (
      <div>
        <h1>Current Name: {name}</h1>
        <h2>Previous Name: {prevName.current}</h2>
      </div>
    );
  }
  

//   🧠 In short:
// useRef = Remember something across renders without re-rendering.