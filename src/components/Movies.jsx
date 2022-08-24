import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.setState({
      movies: getMovies(),
    });
  }

  handleDelete = (event) => {
    let id = event.target.id;
    let movies = this.state.movies.filter((movie) => id !== movie._id);

    this.setState({
      movies,
    });
  };

  render() {
    let count = this.state.movies.length;

    if (!count) return "There are no movies in the database";

    return (
      <React.Fragment>
        <h1>Showing {count} movies in the database</h1>
        <table className="table table-hover table-responsive">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    id={movie._id}
                    className="btn btn-danger btn-sm"
                    onClick={this.handleDelete}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
