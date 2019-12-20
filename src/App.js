import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'
//this is a root component

class App extends Component{
  state = {
    ninjas: [
      {name: 'Bea', age: 19, color: 'Blue', id: 1},
      {name: 'Fer', age: 21, color: 'Vinho', id: 2}
    ]
  }

  addNinja = (newNinja) => {
    newNinja.id = Math.random()
    let ninjas = [...this.state.ninjas, newNinja]
    this.setState({
      ninjas
    })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas
    })
  }

  componentDidMount(){
    console.log('componentDidMount')
  }

  componentDidUpdate(prevProps, prevState){
    console.log("componentDidUpdate")
    console.log(prevProps)
    console.log(prevState)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello World</h1>
          <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
          <AddNinja addNinja={this.addNinja} />
        </header>
      </div>
    );  
  }
}

export default App;
//nesting component -> colocando um dentro do outro (aninhar)