import React, { Component } from "react";
import Like from "./common/like";

class MoviesTable extends Component {
  render() {
    const { movies, onLike, onDelete, onSort } = this.props;
    return (
      <table className="table table-hover table-responsive">
        <thead>
          <tr>
            <th onClick={() => onSort("title")} scope="col">
              Title
            </th>
            <th onClick={() => onSort("genre.name")} scope="col">
              Genre
            </th>
            <th onClick={() => onSort("numberInStock")} scope="col">
              Stock
            </th>
            <th onClick={() => onSort("dailyRentalRate")} scope="col">
              Rate
            </th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.liked} onClick={() => onLike(movie)} />
              </td>
              <td>
                <button
                  id={movie._id}
                  className="btn btn-danger btn-sm"
                  onClick={onDelete}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
