import { useState, Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    console.log("Contructor");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate(prevProps, prevState) {
    //console.log(prevProps, prevState);
  }
  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
  }

  render() {
    return (
      <div>
        <input
          value={this.state.name}
          onChange={({ target: { value } }) => this.setState({ name: value })}
        ></input>
      </div>
    );
  }
}

// function App() {
//   const [name, setName] = useState("Miguel");
//   const [age] = useState();
//   //const [, setSomething] = useState("Hey1");

//   const handleHeyClick = () => {
//     setName("Angel");
//   };

//   return (
//     <div className="App">
//       <h2> Hola {name}</h2>
//       <p>{age}</p>
//       <button onClick={handleHeyClick}>Hey</button>
//     </div>
//   );
// }

export default App;
