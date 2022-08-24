import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { filterMovies } from "../utils/filter";
import { paginate } from "../utils/paginate";
import Pagination from "./common/pagination";
import ListGroup from "./listgroup";
import Table from "./table";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: "All",
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

  handleFilter = (genre) => {
    this.setState({
      selectedGenre: genre,
    });
  };

  render() {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      movies: allMovies,
    } = this.state;

    if (!this.state.movies.length) return "There are no movies in the database";

    let movies = filterMovies(allMovies, selectedGenre);
    const count = movies.length;
    movies = paginate(movies, currentPage, pageSize);

    return (
      <div>
        <ListGroup selectedGenre={selectedGenre} onFilter={this.handleFilter} />
        <div>
          <h1>Showing {count} movies in the database</h1>
          <Table
            movies={movies}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
          />
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
