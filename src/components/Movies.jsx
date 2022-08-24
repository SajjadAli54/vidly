import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

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
    let movies = this.state.movies.filter(
      (movie) => event.target.id !== movie._id
    );

    this.setState({
      movies,
    });
  };

  render() {
    const { length: count } = this.state.movies;

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
