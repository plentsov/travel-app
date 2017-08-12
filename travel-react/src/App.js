import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super()
    this.state = {
      word: 'ololo'
    }
  }

  componentDidMount() {
    return fetch('http://localhost:5000/super_api')
      .then((response) => response.json())
      .then((r) => this.setState({word: r}))
      .then((response) => console.log(response))
      .catch((error) => console.error(error))
  }


  render() {
    return (
      <div className="App">
        <h2>Hello</h2>
        <br/>
        <h3>{this.state.word}</h3>
      </div>
    );
  }

}

export default App;
