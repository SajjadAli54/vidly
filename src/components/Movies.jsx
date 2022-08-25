import React, { Component } from "react";
import { getGenres } from "../services/fakeGenreService";
import { getMovies } from "../services/fakeMovieService";
import { filterMovies } from "../utils/filter";
import { paginate } from "../utils/paginate";
import Pagination from "./common/pagination";
import ListGroup from "./common/listgroup";
import Table from "./table";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: "All",
  };

  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genres: getGenres(),
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

  handleGenreSelect = (genre) => {
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
      genres,
    } = this.state;

    if (!this.state.movies.length) return "There are no movies in the database";

    let movies = filterMovies(allMovies, selectedGenre);
    const count = movies.length;
    movies = paginate(movies, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            textProperty="name"
            valueProperty="_id"
            selectedGenre={selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>

        <div className="col">
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
