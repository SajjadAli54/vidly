import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
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

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };

    movies[index].liked = !movies[index].liked;

    this.setState({
      movies,
    });
  };

  handlePageChange = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage } = this.state;

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
              <th scope="col"></th>
              <th scope="col"></th>
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
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
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
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
