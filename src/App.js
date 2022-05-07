import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiCallRequest } from "./features/dogs/dogsSlice";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const { dog, error, fetching } = useSelector((state) => state.dogs);

  console.log("render", dog, error, fetching);
  const onRequestDog = () => dispatch(apiCallRequest());

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

export default App;
