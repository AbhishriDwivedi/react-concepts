import { useEffect, useState } from 'react';

function UseEffect() {
  // handle state of a variable using useState hook, also to reflect the change on the UI
  const[text,setText] = useState(' ');

  // use effect helps in handling side effects of a component
  // executes after the component is rendered
  // API call, title update, etc.
  // when we want to do something other than the normal funcitioning of our component

  // Variation 1 -> runs at every render.
  // callbacl function, array of dependencies
  // useEffect(()=>{
  //   console.log("UI Rendering done");
  // });


  // Variation 2 -> runs only at first render
  // to execute it only on first render, add [] as second parameter
  // this [] is a dependency list
  // useEffect(()=>{
  //   console.log("UI Rendering done");
  // }, []);


  // Variation 3 -> runs only on first render + whenever dependency(text) changes
  // useEffect(()=>{
  //   console.log("UI Rendering done");
  // }, [text]);


  // Variation 4 -> to handle unmounting of a component 
  // removing previously added listeners before adding new ones
  useEffect(()=>{
    // this runs after the code inside return had executed
    console.log("listener added");

    return () => {
      // code inside return runs first
      console.log("listener removed");
    }
  }, [text]);

  
  function changeHandler(event){
    setText(event.target.value);
    console.log(text);
  }

  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default UseEffect;

// Mount: component has loaded into DOM and rendered
// Unmounted: component removed from DOM