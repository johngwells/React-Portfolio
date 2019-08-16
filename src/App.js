import React, { Component } from 'react';
import Projects from './Projects';
import Icons from './Icons';

class App extends Component {
  state = { displayBio: false};

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <p>My name is Johnny!</p>
        <p>I love life!</p>
        {
          this.state.displayBio ? (
            <div>
              <p>My favorite language is JavaScript</p>
              <p>I love React!</p>
              <button onClick={this.toggleDisplayBio}>Show Less</button>
            </div>
          ) : (
            <div>
              <button onClick={this.toggleDisplayBio}>Read More</button>
            </div>
          )
        }
        <hr />
        <Projects />
        <div>
          <Icons />
        </div>
      </div>
    )
  }
};

export default App;