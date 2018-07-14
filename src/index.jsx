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
      cardHidden: true,
      tab: 'build'
    };

    this.onSearch = this.onSearch.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSaveTeam = this.handleSaveTeam.bind(this);
  }

  onSearch(player) {
    console.log('Searching for: ', player);
    axios.post('/player', { player })
      .then((response) => {
        this.setState({
          playerStats: response.data,
          cardHidden: false
        });
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

  handleDelete(i) {
    console.log(i);
    let temp = this.state.team;
    temp.splice(i, 1);
    this.setState({
      team: temp
    });
  }

  handleSaveTeam() {
    axios.post('/teams', {team: this.state.team})
      .then((response) => console.log('team sent/saved to server'))
      .catch((err) => console.log('error in handleSavePOST', err));
  }

  render() {
    if (this.state.tab === 'saved') {
      return (
        <div>
          <div className="tabs is-large is-boxed">
            <ul>
              <li onClick={() => this.setState({ tab: 'build' })} className={(this.state.tab === 'build') ? 'is-active' : ''}><a>Build Team</a></li>
              <li onClick={() => this.setState({ tab: 'saved' })} className={(this.state.tab === 'saved') ? 'is-active' : ''}><a>Saved Teams</a></li>
            </ul>
          </div>
          <section className="section">
            SHOW TEAMS HERE
          </section>
        </div>
      );
    }

    return (
      <div>
        <div className="tabs is-large is-boxed">
          <ul>
            <li onClick={() => this.setState({ tab: 'build' })} className={(this.state.tab === 'build') ? 'is-active' : ''}><a>Build Team</a></li>
            <li onClick={() => this.setState({ tab: 'saved' })} className={(this.state.tab === 'saved') ? 'is-active' : ''}><a>Saved Teams</a></li>
          </ul>
        </div>
        <section className="section">
          <div className="container">
            <Search onSearch={this.onSearch} />
            <div className="column is-two-fifths">
              {!this.state.cardHidden && <PlayerCard player={this.state.playerStats} />}
              <a style={{ visibility: this.state.cardHidden ? 'hidden' : 'visible', margin: '15px', align: 'center' }} className="button is-link" onClick={this.handleAdd}>Add to Dream Team</a>
            </div>
            <section className="section">
            </section>
            <Team team={this.state.team} handleDelete={this.handleDelete} />
            <a onClick={this.handleSaveTeam} className="button is-link" style={{ visibility: this.state.team.length === 5 ? 'visible' : 'hidden' }}>Save This Team</a>
          </div>
        </section>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));