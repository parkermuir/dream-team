import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import Main from './components/Main.jsx';
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
      })
      .catch(err => console.log('onSearch FE error: ', err));
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Dream Team</h1>
          <Search onSearch={this.onSearch} />
          <Main player={this.state.playerStats}/>
        </div>
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));