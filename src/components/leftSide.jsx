import React from "react";
import ListGroup from "./common/listgroup";

const LeftSide = ({ classLabel, items, selectedItem, onItemSelect }) => {
  return (
    <div className={classLabel}>
      <ListGroup
        items={items}
        selectedItem={selectedItem}
        onItemSelect={onItemSelect}
      />
    </div>
  );
};

export default LeftSide;
