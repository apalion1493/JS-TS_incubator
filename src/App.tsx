import React from 'react';
import './App.css';
import {User} from "./06/06-callbacks";

function App() {
  const nameUsers = [
    {
      name: 'Name 1',
    },
    {
      name: 'Name 2',
    },
    {
      name: 'Name 3',
    },
    {
      name: 'Name 4',
    },
  ]

  const liElements = nameUsers.map((n, index) => <li key={index}>{n.name}</li>)

  return (
    <div className="App">
      <ul>
        {liElements}
      </ul>

      <User/>
    </div>
  );
}

export default App;
