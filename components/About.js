import React, { Component } from 'react';

class About extends React.Component {
  constructor() {
    this.state = {
      error: null,
      Loaded: false,
      albums: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then(response => response.json())
      .then(albums => { this.setState({ Loaded: true, albums }) },
      error => { this.setState({ Loaded: true, error }); })
  }

  render() {
    const { error, Loaded, albums } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!Loaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {albums.map(album => (<li key={album.id}>{album.title}</li>))}
        </ul>
      );
    }
  }
}

export default About


  