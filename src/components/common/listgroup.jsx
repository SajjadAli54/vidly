import React from "react";
import { getGenres } from "../../services/fakeGenreService";

const ListGroup = (props) => {
  const { items, textProperty, valueProperty, selectedGenre, onItemSelect } =
    props;

  return (
    <ul className="list-group inline-block">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          onClick={() => onItemSelect(item[textProperty])}
          className={
            item[textProperty] === selectedGenre
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
