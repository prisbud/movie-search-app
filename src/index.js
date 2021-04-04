import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Search from './search.js'

class Main extends React.Component {
  render() {

    return (

      <div className="container">
        <h1 className="title">Movie search App</h1>
        <Search />
      </div>

    )
  }
}

ReactDOM.render(<Main />, document.getElementById('root'))