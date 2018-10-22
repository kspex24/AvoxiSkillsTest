import React from 'react';
import "./stylesheet.css";

const MovieSearchForm = props => (
  <form>
    <div className="form-group">
    <input
      onChange={props.handleInputChange}
      value={props.value}
      name="search"
      type="text"
      className="form-control"
      placeholder="Enter movie title..."
      id="search"
      />
      <br />
      <button
        onClick={props.handleFormSubmit}
        className="btn btn-center"
        id="searchButton"
        >Search</button>

    </div>
  </form>
)
     


export default MovieSearchForm;