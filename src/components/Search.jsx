import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      team: ''
    };
    this.search = this.search.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  search(e) {
    if (e) {
      e.preventDefault();
    }

    this.props.onSearch(this.state.team);
  }

  onChange(e) {
    this.setState({
      team: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.search}>
          <input className="input" type="text" placeholder="Enter NBA Team Abbreviation ex: BOS"
            value={this.state.team.slice(0, 3).toUpperCase()} onChange={this.onChange}>
          </input>
        </form>

      </div>
    );
  }
}

export default Search;


