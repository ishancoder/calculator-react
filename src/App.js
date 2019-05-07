import React, {Component} from 'react';
import NumPad from './components/NumPad/NumPad';

class App extends Component {
  constructor() {
    super();
    this.state = {display: "0", emptyOnNext: true};
    this.operation = "";
  }

  solve = (ops) => {
    if(!this.operation) {
      this.first = parseFloat(this.state.display);
      this.operation = ops;
      return;
    } 
    let ans;
    const second = parseFloat(this.state.display);
    switch(this.operation) {
      case "+":
        ans = this.first + second;
        break;
      case "-":
        ans = this.first - second;
        break;
      case "÷":
        ans = this.first / second;
        break;
      case "X":
        ans = this.first * second;
        break;
      default:
        break;
    }
    this.first = ans;
    this.operation = ops;
    this.setState({display: ans.toString(), emptyOnNext: true});
  }

  handleClick = event => {
    const {currentTarget: {value}} = event;

    if(value !== "." && isNaN(value)) {
      switch(value) {
        case "AC":
          this.operation = "";
          this.setState({display: "0", emptyOnNext: true});
          break;
        case "+/-":
          this.setState(prevState => ({...prevState, display: (-1 * parseFloat(prevState.display)).toString()}))
          break;
        case "=":
          this.solve("");
          break;
        case "%":
          this.setState(prevState => ({
            display: (parseFloat(prevState.display) / 100).toString(),
            emptyOnNext: true
          }));
          break;
        default:
          this.solve(value);
          this.setState({emptyOnNext: true});
          break;
      }
    } else {
      const {emptyOnNext} = this.state;
      if(emptyOnNext) {
        this.setState({...this.state, display: value, emptyOnNext: false});
      } else {
        this.setState((prevState) => ({...prevState, display: `${prevState.display}${value}`}));
      }
    }
  }

  render() {
    return <NumPad display={this.state.display} onClick={this.handleClick}/>
  }
}

export default App;
