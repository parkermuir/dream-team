import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import SearchResults from './components/SearchResults.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      playerStats: null
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(player) {
    console.log('Searching for: ', player);
    axios.post('/player', { player })
      .then((response) => {
        this.setState({
          playerStats: response.data
        });
        console.log(this.state.playerStats);
      })
      .catch(err => console.log('onSearch FE error: ', err));
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Dream Team</h1>
          <Search onSearch={this.onSearch} />
          <SearchResults player={this.state.playerStats}/>
        </div>
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));