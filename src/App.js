import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    users: [],
  }
  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1/comments', true);
    xhr.onload = () => {

      if (xhr.status === 200) {
        const users = JSON.parse(xhr.response);
        console.log(users);

        this.setState({
          users,
        })
      }
      console.log(typeof xhr.response);

    }

    xhr.send(null)
  }

  render() {
    const users = this.state.users.map(user => (
      <li key={user.id}><strong>Name: </strong>{user.name}
       <strong>email: </strong>{user.email}</li>
    ));
    return (<ul>
      {users}
    </ul>)
  }
}

export default App;