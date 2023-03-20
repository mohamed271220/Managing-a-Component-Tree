import React, { useState } from "react";

function ToDoItem({ todoItem, onChange, id }) {
  // const [textLine, setTextLine] = useState(false);
  // // const [styleLine, setstyleLine] = useState({});

  // function handleLine() {
  //   setTextLine(!textLine);
  //   // if (textLine) {
  //   //   setstyleLine({ textDecoration: "line-through" });
  //   // } else {
  //   //   setstyleLine({});
  //   // }
  // }
  return (
    <li
      onClick={() => {
        onChange(id);
      }}
    >
      {todoItem}
    </li>
  );
}

export default ToDoItem;
