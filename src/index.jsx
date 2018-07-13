import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import SearchResults from './components/SearchResults.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      stats: []
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(team) {
    console.log(team, ' was searched');
    axios.post('/team', { team })
      .then((response) => {
        this.setState({
          stats: response.data
        });
        console.log(this.state.stats);
      })
      .catch(err => console.log('onSearch FE error: ', err));
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Query The NBA</h1>
          <Search onSearch={this.onSearch} />
          <SearchResults team={this.state.team}/>
        </div>
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));