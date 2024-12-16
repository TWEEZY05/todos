import React, { useState } from "react";
import styles from "./TodoForm.module.css";
import Button from "../UI/Button";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <div className={styles.todoFormContainer}>
      <form className={styles.TodoForm} onSubmit={(e) => onSubmitHandler(e)}>
        <input
          placeholder="Enter new TODO"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" title="Submit" value={text}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default TodoForm;
