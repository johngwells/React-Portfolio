import React, { Component } from 'react';

class Jokes extends Component {
  state = { joke: {}, jokes: [] };

  componentDidMount() {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(json => this.setState({ joke: json }));
  }

  fetchJokes = () => {
    fetch('https://official-joke-api.appspot.com/random_ten')
      .then(response => response.json())
      .then(json => this.setState({ jokes: json }));
  }

  render() {
    const { setup, punchline } = this.state.joke;
    return (
      <div>
        {/* <h5>Highlighted Joke</h5> */}
        <p>(Joke Api) - {setup} <em>{punchline}</em></p>
        <hr />
        <h3>Want ten new jokes?</h3>
        <button onClick={this.fetchJokes}>Click me!</button>
        {
          this.state.jokes.map(joke => {
            const { id, setup, punchline } = joke;

            return <p key={id}>{setup} <em>{punchline}</em></p>
          })
        }
      </div>
    )
  }
}

export default Jokes;