import React from 'react'
import { Table } from 'react-bootstrap';
import "./stylesheet.css";

const MovieTable = () => (
 
    <Table striped bordered className="movieTable">
    <thead>
        <tr>
            <th>Movie Poster</th>
            <th>Title</th>
            <th>Year</th>
        </tr>
    </thead>
    <tbody>
       
    {this.state.result.length ? (
    this.state.result.map(result => (
        <tr key={result.imdbID}>
            <td><img src={result.Poster} alt={result.Title} style={{width:"50%"}}></img></td>
            <td>{result.Title}</td>
            <td>{result.Year}</td>
        </tr> 
    ))
    ) : (
        <tr />
    )}
    </tbody> 
    </Table>
    );

    export default MovieTable