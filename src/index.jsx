import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    //state here

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(team) {
    //hit up express for that team
    console.log(team, ' was searched');

  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Query The NBA</h1>
          <Search onSearch={this.onSearch} />
        </div>
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));