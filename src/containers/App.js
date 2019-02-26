// Traditional syntax
import React, { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Radium, { StyleRoot } from "radium";
class App extends Component {
  state = {
    persons: [
      { id: "sdfasdf1231", name: "Max", age: 28 },
      { id: "asfasdxzc3435", name: "Manu", age: 29 },
      { id: "sasdgart322", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(data => {
      return data.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  togglePersonsHandle = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />{" "}
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "lightred",
        color: "black"
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1> Hi, I 'm a React App</h1>{" "}
          <p className={classes.join(" ")}> This is really working!!! </p>{" "}
          <button style={style} onClick={this.togglePersonsHandle}>
            {" "}
            Toggle Persons{" "}
          </button>{" "}
          {persons}{" "}
        </div>{" "}
      </StyleRoot>
    );
  }
}

// Using hooks
// import React, { useState } from "react";
// import "./App.css";
// import Person from "./Person/Person";
// const App = props => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: "Max", age: 28 },
//       { name: "Manu", age: 29 },
//       { name: "Stephanie", age: 26 }
//     ],
//     otherState: "some other value"
//   });
//   console.log(personsState);
//   const switchNameHandler = () => {
//     // console.log("Was clicked!");
//     // DON'T DO THIS: this.state.persons[0].name = "Maximilian";
//     setPersonsState({
//       persons: [
//         { name: "Maximilian", age: 28 },
//         { name: "Manuel", age: 30 },
//         { name: "Stephanie", age: 27 }
//       ],
//       otherState: personsState.otherState
//     });
//   };

//   return (
//     <div className="App">
//       <h1> Hi, I 'm a React App</h1> <p> This is really working!!! </p>{" "}
//       <button onClick={switchNameHandler}> Switch Name </button>{" "}
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       />{" "}
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//       >
//         {" "}
//         My hobbies: Racing{" "}
//       </Person>{" "}
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age}
//       />{" "}
//     </div>
//   );
// };

export default Radium(App);
