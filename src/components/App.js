import React, { Component } from 'react';
import Projects from './Projects';
import Icons from './Icons';
import profile from '../assets/profile.jpg';
import Title from './Title';

class App extends Component {
  state = { displayBio: false};

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render() {
    return (
      <div>
        <img src={profile} alt='profile' className='profile'/>
        <h1>Hello!</h1>
        <p>My name is Johnny!</p>
        { this.state.displayBio ? <Title /> : null}
        {
          this.state.displayBio ? (
            <div>
              <p>My favorite language is JavaScript</p>
              <p>I love ReactJS!</p>
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
        <hr />
        <div>
          <Icons />
        </div>
      </div>
    )
  }
};

export default App;