import React, { useState, Component } from "react";
import Item from "./Components/Item";
import Header from "./Components/Header";
import MenuProject from "./Components/MenuProject";
import Task from "./Components/Task";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const getTitle = (id: number) => {
  switch (id) {
    case 0:
      return "Todo";
    case 1:
      return "Doing";
    case 2:
      return "Completed";
    default:
      return;
  }
};

const getColor = (id: number) => {
  switch (id) {
    case 0:
      return "redComplement";
    case 1:
      return "yellowComplement";
    case 2:
      return "greenComplement";
    default:
      return;
  }
};

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  padding: grid,
});

function App() {
  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */

  const getList = (id: string) => {
    if (id === "droppable") {
      return items;
    } else if (id === "droppable2") {
      return selected;
    } else if (id === "droppable3") {
      return completed;
    }
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      console.log(source);
      const reorderList = reorder(
        getList(source.droppableId),
        source.index,
        destination.index
      );

      if (source.droppableId === "droppable") {
        setItems(reorderList);
      } else if (source.droppableId === "droppable2") {
        setSelected(reorderList);
      } else if (source.droppableId === "droppable3") {
        setCompleted(reorderList);
      }
    } else {
      const result = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      );

      if (result.hasOwnProperty("droppable")) {
        setItems(result.droppable);
      }
      if (result.hasOwnProperty("droppable2")) {
        setSelected(result.droppable2);
      }
      if (result.hasOwnProperty("droppable3")) {
        setCompleted(result.droppable3);
      }

      // setCompleted(result.droppable3);
    }
  };

  const [items, setItems] = useState([
    { id: "1", content: "Login" },
    { id: "2", content: "Change the objects" },
    { id: "3", content: "Redux" },
    { id: "4", content: "Show the entire card" },
    { id: "5", content: "Activity" },
    { id: "6", content: "Priority and Realtime changes" },
  ]);
  const [selected, setSelected] = useState([
    { id: "8", content: "Reuse drop field" },
    { id: "10", content: "Types for typescript" },
  ]);
  const [completed, setCompleted] = useState([
    { id: "14", content: "Style base for the website" },
    { id: "15", content: "Logo" },
  ]);

  return (
    <div className="App w-full">
      <MenuProject />

      <div className="container mx-auto">
        <div className="flex justify-center space-x-5 ">
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                  className="w-80 border-2 h-min border-gray-500 rounded-md text-white bg-red-400 bg-opacity-10"
                >
                  <p className="p-2 pl-4 font-semibold text-red-400">Todo</p>
                  {items.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          <Task content={item.content} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            <Droppable droppableId="droppable2">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                  className="w-80 border-2 h-min border-gray-500 rounded-md text-white bg-yellow-400 bg-opacity-10"
                >
                  <p className="p-2 pl-4 font-semibold text-yellow-400">
                    Doing
                  </p>
                  {selected.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          <Task content={item.content} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <Droppable droppableId="droppable3">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                  className="w-80 border-2 h-min border-gray-500 rounded-md text-white bg-green-400 bg-opacity-10"
                >
                  <p className="p-2 pl-4 font-semibold text-green-400">
                    Completed
                  </p>
                  {completed.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          <Task content={item.content} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
}

export default App;
