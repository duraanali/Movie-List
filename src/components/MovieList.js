// Step 2: Create MovieList component, using ICE (Import, Componet, Export)
// Step 3: Grab the API and use USEEFFECT to render the API
// Step 4: Import and use axios to render the API

import React, {useEffect, useState} from "react"
import { Row } from 'reactstrap';
import axios from "axios";
import MovieCard from "./MovieCard"

function MovieList() {
  // Create a state to store the films

  const [films, setFilms] = useState([])

    useEffect( () => {
      
        axios.get("https://ghibliapi.herokuapp.com/films")
            .then((res) => {
               setFilms(res.data)
            })
            .catch((err) => console.log(err))

    // HOW TO CLEAN UP USEEFFECT

    }, [])


    return (
        <Row>
            {films.map(function(film) {
                return <MovieCard film={film} />
            })}
        </Row>
    )
}

export default MovieList