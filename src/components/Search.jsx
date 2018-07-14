import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };
    this.search = this.search.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  search(e) {
    if (e) {
      e.preventDefault();
    }
    this.props.onSearch(this.state.input);
    this.setState({
      input: ''
    });
  }

  onChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.search}>
          <input className="input" type="text" placeholder="Enter NBA Player"
            value={this.state.input} onChange={this.onChange}>
          </input>
        </form>
      </div>
    );
  }
}

export default Search;


