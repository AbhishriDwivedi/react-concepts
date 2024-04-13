import React from "react";
import {useState} from "react";

const UseState=()=>{
    // The useState function returns a pair, 
    // first is current state and second is the function that updates it
    // initial state is passed into the useState function

    // we can use this hook for changing the state of a variable
    const[name, setName] = useState(" ");

    // we can set entire objects using useState hook
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: ""
      });

    // this function is called when any value is changed,
    // it keeps other values same using prevData and changes the one which was edited by the user
    function changeHandler(event){
        setFormData((prevData)=>{return{...prevData, [event.target.name]:event.target.value}});
      }

    function submitHandler(event){
        console.log(event.target);
    }  

      return (
        // use onSubmit when using a form
        <Form onSubmit={submitHandler}>
            <input value={formData.firstName} onChange={changeHandler}></input>
            <input value={formData.lastName} onChange={changeHandler}></input>
            <input value={formData.email} onChange={changeHandler}></input>
        </Form>
      );
}

export default UseState;