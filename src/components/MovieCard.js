// Step 5: Create MovieCard Component, ICE
// Step 6: Make sure to pass props from the Movielist component
// Step 7: Render the data from the props

import React from "react"
import { 
    Col, 
    Card, 
    Button, 
    CardHeader, 
    CardFooter, 
    CardBody,
    CardTitle, 
    CardText } from 'reactstrap';

function MovieCard(props) {
    const { film } = props
    


    return (
    <Col xs="6">
      <Card>
        <CardHeader><h2>{film.title}</h2></CardHeader>
        <CardBody>
          <CardText>{film.description}</CardText>
          <CardText>Director: {film.director}</CardText>
          <CardText>Release Date: {film.release_date}</CardText>
        </CardBody>
      </Card>
   </Col>
    )
}

export default MovieCard;