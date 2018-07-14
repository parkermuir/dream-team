import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import axios from 'axios';
import PlayerCard from './components/PlayerCard.jsx';
import Team from './components/Team.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      playerStats: null,
      team: [],
      cardHidden: true
    };

    this.onSearch = this.onSearch.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  onSearch(player) {
    console.log('Searching for: ', player);
    axios.post('/player', { player })
      .then((response) => {
        this.setState({
          playerStats: response.data,
          cardHidden: false
        });
        console.log(this.state.playerStats);
      })
      .catch(err => console.log('onSearch FE error: ', err));
  }

  handleAdd() {
    if (this.state.team.length >= 5) {
      return;
    }
    let temp = this.state.team;
    temp.push(this.state.playerStats);
    this.setState({
      team: temp,
      cardHidden: true
    });
    console.log(this.state.team);
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Dream Team</h1>
          <Search onSearch={this.onSearch} />
          <div className="column is-two-fifths">
            {!this.state.cardHidden && <PlayerCard player={this.state.playerStats} />}
            <a style={{ visibility: this.state.cardHidden ? 'hidden' : 'visible' }} className="button is-link" onClick={this.handleAdd}>Add to Dream Team</a>
          </div>
          <section className="section">
            <h1 className="title is-3">My Team</h1>
            <Team team={this.state.team} />
          </section>
        </div>
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));