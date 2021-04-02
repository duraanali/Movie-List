import React from "react"
import MovieList from "./components/MovieList"
import './App.css';
import { Container } from 'reactstrap';

let logo = "https://bit.ly/31ShkO1";

function App() {
  return (
    <Container>
      <img className="logo" src={logo} alt="logo" />
      {/* Step 1: Import MovieList component and Render here */}

      <MovieList />
    </Container>
  );
}

export default App;
