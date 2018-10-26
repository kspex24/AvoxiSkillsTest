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

//capture the text as entered by the user
handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
        [name]: value
    });
    console.log(value);
};

//On form submission, search movie database using captured text
handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovie(this.state.search);
    console.log(this.state.search);
    if (this.state.search.length < 1) {
        alert("Please enter a movie title")
    }
    else {
        console.log("Searching...")
    }

};

//Function to query the movie database
searchMovie= query => {
    API.search(query)
        .then(res => this.setState({ result: res.data }))
        .catch(err => console.log (err))
        console.log(this.state.result)
       
};
movieTable = () => (
 
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
        <this.movieTable />
    </div>  
);
}
}

export default SearchResultsTable;