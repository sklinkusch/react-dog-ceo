import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

// import React bindings for Redux
import { connect } from 'react-redux'

class App extends Component {
  render() {
    // Destructuring assignment from Props
    const { fetching, dog, onRequestDog, error } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={dog || logo} className="App-logo rounded-circle" alt="logo" />
          <h1 className="App-title">The Dog saga</h1>

          {dog ? (
            <p className="App-intro">Keep clicking for new dogs</p>
          ) : (
              <p className="App-intro">Replace the React icon with a dog!</p>
            )}

          {fetching ? (
            <button className="btn btn-warning" disabled>Fetching...</button>
          ) : (
              <button className="btn btn-primary" onClick={onRequestDog}>Request a dog</button>
            )}

          {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
        </header>
      </div>
    );
  }
}

// Extracting data with mapStateToProps
const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    error: state.error
  };
};

// Dispatching actions with mapDispatchToProps
const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
