import { useState } from "react";
import Item from "./Components/Item";
import Header from "./Components/Header";
import MenuProject from "./Components/MenuProject";
import Task from "./Components/Task";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const getTitle = (id) => {
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

const getColor = (id) => {
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

// fake data generator
const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k + offset}-${new Date().getTime()}`,
    content: `item ${k + offset}`,
  }));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

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
  userSelect: "none",

  // change background colour if dragging
  background: isDragging ? "none" : "none",

  // styles we need to apply on draggables
  ...draggableStyle,
});
const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "none" : "none",
  padding: grid,
});

function App() {
  const [state, setState] = useState([getItems(5), getItems(7, 5), []]);

  function onDragEnd(result) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index);
      const newState = [...state];
      newState[sInd] = items;
      setState(newState);
    } else {
      const result = move(state[sInd], state[dInd], source, destination);
      const newState = [...state];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

      setState(newState.filter((group) => group.length));
    }
  }
  return (
    <div className="App w-full">
      <MenuProject />

      <div className="container mx-auto">
        <div className="flex justify-center space-x-5">
          <DragDropContext onDragEnd={onDragEnd} isDropDisabled={false}>
            {state.map((el, ind) => (
              <div
                className={`w-80 border-2 border-gray-500 bg-opacity-10 h-min rounded-md bg-${getColor(
                  ind
                )}`}
              >
                <p className={` p-2 pl-4 font-semibold text-${getColor(ind)}`}>
                  {getTitle(ind)}
                </p>
                <Droppable key={ind} droppableId={`${ind}`}>
                  {(provided, snapshot) => (
                    <div>
                      <div
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                        {...provided.droppableProps}
                      >
                        <div></div>
                        {el.map((item, index) => (
                          <div>
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
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-around",
                                    }}
                                  >
                                    <Task content={item.content} />
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          </div>
                        ))}
                        {provided.placeholder}
                      </div>
                      <></>
                    </div>
                  )}
                </Droppable>
              </div>
            ))}
          </DragDropContext>
        </div>
      </div>
    </div>
  );
}

export default App;
