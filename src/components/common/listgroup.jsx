import React from "react";
import { getGenres } from "../../services/fakeGenreService";

const ListGroup = (props) => {
  const { items, textProperty, valueProperty, selectedItem, onItemSelect } =
    props;
  return (
    <ul className="list-group inline-block">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
          className={
            item._id === selectedItem._id
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
