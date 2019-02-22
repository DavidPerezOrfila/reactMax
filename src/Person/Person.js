import React from "react";

const person = props => {
  return (
    // Para utilizar código dentro de un string debemos encapsularlo entre {}
    <div>
      <p onClick={props.click}>
        I 'm {props.name} and I am {props.age} years old!{" "}
      </p>{" "}
      <p> {props.children} </p>{" "}
      <input type="text" onChange="nameChangedHandler" />
    </div>
  );
};

export default person;
