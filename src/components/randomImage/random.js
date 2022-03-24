
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
        <center><p>Here is a random Legendary Creature that you can build a deck around. Check it out!</p></center>
        <PhotoContainer photos={this.state.photos} />
      </section>
    )
  }
}

export default App;
