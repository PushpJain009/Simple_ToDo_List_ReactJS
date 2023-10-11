import React, { useState } from "react";
import OrderList from "./OrderList";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const addItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>TODO LIST</h1>
          <br />
          <input
            type="text"
            placeholder="Add Items"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={addItem}>+</button>
          <br />
          {items.length > 0 ? (
            <div>
              <div className="task_heading">
                <h3>Tasks To Do</h3>
              </div>
              <ol>
                {items.map((itemValue, index) => {
                  return (
                    <OrderList
                      key={index}
                      id={index}
                      text={itemValue}
                      onSelect={deleteItems}
                    />
                  );
                })}
              </ol>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
