import React, {Component} from 'react';
import API from '../utils/API';
import { Jumbotron } from 'react-bootstrap';
import MovieSearchForm from './MovieSearchForm.js'
import { Table } from 'react-bootstrap';
import "./stylesheet.css";

class SearchResultsTable extends Component {
    state = {
        result: [],
        search: ""
    };


//Function to query the movie database
searchMovie= query => {
    API.search(query)
        .then(res => this.setState({ result: res.data }))
        .catch(err => console.log (err));
};

//capture the text as entered by the user
handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
        [name]: value
    });
};

//On form submission, search movie database using captured text
handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovie(this.state.search);
    console.log(this.state.search);
};


//Display search box in jumbotron and results in table form
render () {
    return (
    <div>
        <Jumbotron className="bg">
            <h2>Avoxi Skills Test</h2>
            <h4>Get the most up to date information about your favorite movies.</h4>
            <img src="https://openclipart.org/image/256px/svg_to_png/176792/3D-Glasses-3-by-Merlin2525.png" alt="3d Glasses 3" className="img-fluid"/>
                <MovieSearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                />
        </Jumbotron>
        <h3>Search Results:</h3>
        <Table striped bordered className="movieTable">
            <thead>
                <tr>
                    <th>Movie Poster</th>
                    <th>Title</th>
                    <th>Plot Summary</th>
                    <th>Rating</th>
                    <th>Director</th>
                    <th>Release Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src={this.state.result.Poster} alt={this.state.result.Title} style={{width:"50%"}}></img></td>
                    <td>{this.state.result.Title}</td>
                    <td>{this.state.result.Plot}</td>
                    <td>{this.state.result.Rated}</td>
                    <td>{this.state.result.Director}</td>
                    <td>{this.state.result.Released}</td>
                </tr> 
            </tbody> 
        </Table>
    </div>  
);
}
}

export default SearchResultsTable;