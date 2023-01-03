import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Task from "./Task";

interface IDraggable {
  items: string[];
  provide: any;
  snapshot: any;
}

export default function Index(droppableId: number, item: string[]) {
  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver) => ({
    padding: grid,
  });

  return (
    <>
      <Draggable key={item.id} draggableId={item.id} index={index}>
        {(provided, snapshot) => (
          <div
            className=""
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
    </>
  );
}
