import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

function App() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=61addfbc01ef3918e4ec861b0115c950&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
      )
      .then((results) => {
        setMovies(results?.data.results);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          {movies?.map((movie) => (
            <Row>
              {console.log("MOVIE", movie)}
              <Col md={4}>
                <Card
                  style={{
                    width: "18rem",
                    border: "1px solid white",
                    marginBottom: "20px",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.overview}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}
        </Container>
        <p>
          Edit <code>src/App.js</code> and reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
