import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      count:0
    }
  }
  clickHandler(){
    this.setState({
      count:this.state.count+1
    })
  }
  
  
  render() {
    return (
      <div>
       <h1>{this.state.count}</h1>
       <button onClick={()=>{this.clickHandler()}}>Double</button>
      </div>
    )
  }
}

export default App

