import React from "react";

const person = props => {
  return (
    // Para utilizar código dentro de un string debemos encapsularlo entre {}
    <p>
      I 'm {props.name} and I am {props.age} years old!{" "}
    </p>
  );
};

export default person;
