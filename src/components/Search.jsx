import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input className="input" type="text" placeholder="Enter NBA Team"/>
    );
  }
}

export default Search;


