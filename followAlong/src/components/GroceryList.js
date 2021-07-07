import React from "react";

import Item from "./Item";

const GroceryList = props => {
  // for sorting the list based on whether an item has been purchased or not
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="shopping-list">
      {props.groceries.map(item => (
        <Item key={item.id} handleItemToggle={props.handleItemToggle} item={item} />
      ))}
      <button className="clear-btn">
        Clear Purchased
      </button>
    </div>
  );
};

export default GroceryList;