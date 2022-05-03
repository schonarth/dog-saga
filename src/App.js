import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { API_CALL_REQUEST } from "./redux";
import { connect } from "react-redux";

function App({ fetching, dog, onRequestDog, error }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dog || logo} className="App-logo" alt="logo" />
        <h1 className="app-title">Welcome to the Dog Saga</h1>

        {dog ? (
          <p className="app-intro">Keep clicking for new dogs</p>
        ) : (
          <p className="app-intro">Replace the React icon with a dog!</p>
        )}

        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={onRequestDog}>Request a Dog</button>
        )}
        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestDog: () => dispatch({ type: API_CALL_REQUEST }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
