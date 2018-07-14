import React from 'react';
import PlayerCard from './PlayerCard.jsx';
import Team from './Team.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      team: []
    };

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(player) {
    if (this.state.team.length >= 5) {
      return;
    }
    let temp = this.state.team;
    temp.push(this.props.player);
    this.setState({
      team: temp
    });

  }

  render() {
    if (!this.props.player) {
      return (
        <div></div>
      );
    }

    return (
      <div className="column is-two-fifths">
        <PlayerCard player={this.props.player} handleAdd={this.handleAdd} />
        <section className="section">
          <h1 className="title is-3">My Team</h1>
          <Team team={this.state.team} />
        </section>
      </div>
    );
  }
}

export default Main;
