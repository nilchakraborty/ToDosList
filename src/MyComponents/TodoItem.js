import React from "react";
import Button from "@mui/material/Button";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <>
      <div>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <Button className="btn btn-danger" onClick={() => {onDelete(todo);}} variant="contained">
          <DeleteRoundedIcon/>
        </Button>
      </div>
      <hr />
    </>
  );
};
