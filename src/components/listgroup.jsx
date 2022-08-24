import React from "react";
import { getGenres } from "../services/fakeGenreService";

const ListGroup = ({ selectedGenre, onFilter }) => {
  const genres = [{ _id: "All", name: "All" }, ...getGenres()];
  return (
    <ul className="list-group inline-block">
      {genres.map((obj) => (
        <li
          key={obj._id}
          onClick={() => onFilter(obj.name)}
          className={
            obj.name === selectedGenre
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {obj.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
