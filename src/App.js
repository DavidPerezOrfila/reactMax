import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";
// Standard component
// import React, {Component} from "react";
//class App extends Component {
//   state = {
//     persons: [
//       { name: "Max", age: 28 },
//       { name: "Manu", age: 29 },
//       { name: "Stephanie", age: 26 }
//     ],
//    otherState: "some other value"
//   };

//   switchNameHandler = () => {
//     // console.log("Was clicked!");
//     // DON'T DO THIS: this.state.persons[0].name = "Maximilian";
//     this.setState({
//       persons: [
//         { name: "Maximilian", age: 28 },
//         { name: "Manuel", age: 30 },
//         { name: "Stephanie", age: 27 }
//       ]
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1> Hi, I 'm a React App</h1> <p> This is really working!!! </p>{" "}
//         <button onClick={this.switchNameHandler}> Switch Name </button>{" "}
//         <Person
//           name={this.state.persons[0].name}
//           age={this.state.persons[0].age}
//         />{" "}
//         <Person
//           name={this.state.persons[1].name}
//           age={this.state.persons[1].age}
//         >
//           {" "}
//           My hobbies: Racing{" "}
//         </Person>{" "}
//         <Person
//           name={this.state.persons[2].name}
//           age={this.state.persons[2].age}
//         />{" "}
//       </div>
//     );
//   }
// }

// Using hooks

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ],
    otherState: "some other value"
  });
  console.log(personsState);
  const switchNameHandler = () => {
    // console.log("Was clicked!");
    // DON'T DO THIS: this.state.persons[0].name = "Maximilian";
    setPersonsState({
      persons: [
        { name: "Maximilian", age: 28 },
        { name: "Manuel", age: 30 },
        { name: "Stephanie", age: 27 }
      ],
      otherState: personsState.otherState
    });
  };

  return (
    <div className="App">
      <h1> Hi, I 'm a React App</h1> <p> This is really working!!! </p>{" "}
      <button onClick={switchNameHandler}> Switch Name </button>{" "}
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />{" "}
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        {" "}
        My hobbies: Racing{" "}
      </Person>{" "}
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />{" "}
    </div>
  );
};

export default App;
