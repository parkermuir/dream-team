import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    //state here
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Query The NBA</h1>
        </div>
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));