import React, { Component } from 'react';

export default class Test extends Component {
  state = {
    title: '',
    userId: ''
  };

  componentDidMount() {
    console.log(`Component did nount`);
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => this.setState({ title: json.title, userId: json.userId }));
  }

  // Deprecated
  //componentWillMount() {
  //  console.log(`Component will nount`);
  //}

  componentDidUpdate() {
    console.log(`Component did update`);
  }

  // Deprecated
  //componentWillUpdate() {
  //  console.log(`Component will update`);
  //}

  // Deprecated
  //componentWillReceiveProps(nextProps, nextState) {
  //  console.log(`componentWillReceiveProps...`);
  //}

  render() {
    const { userId, title } = this.state;
    return (
      <div>
        <h1>Test component</h1>
        <ul>
          <li>{userId}</li>
          <li>{title}</li>
        </ul>
      </div>
    );
  }
}
