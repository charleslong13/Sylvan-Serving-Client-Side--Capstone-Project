
import './image.css';
import React, { Component } from 'react';
import PhotoContainer from './photoContainer';



//  accepts props as an argument and returns a React element.
//class component requires you to extend from React.Component and create a render function which returns a React element
class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: []
    };
  }

  render() {
    return (
      <section className="app">
      <p></p>
        <center><p> Get some inspiration for your next deck here. Check it out!</p></center>
        <PhotoContainer photos={this.state.photos} />
      </section>
    )
  }
}

export default App;
