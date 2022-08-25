import React from "react";
import { getGenres } from "../services/fakeGenreService";

const ListGroup = ({ items, selectedGenre, onItemSelect }) => {
  return (
    <ul className="list-group inline-block">
      {items.map((obj) => (
        <li
          key={obj._id}
          onClick={() => onItemSelect(obj.name)}
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
