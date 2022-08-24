import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { paginate } from "../utils/paginate";
import Pagination from "./common/pagination";
import Table from "./table";

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
    const { pageSize, currentPage, movies } = this.state;

    if (!count) return "There are no movies in the database";

    const paginated = paginate(movies, currentPage, pageSize);

    return (
      <React.Fragment>
        <h1>Showing {count} movies in the database</h1>
        <Table
          movies={paginated}
          onDelete={this.handleDelete}
          onLike={this.handleLike}
        />
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
