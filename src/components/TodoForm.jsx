import React from "react";

const ToDoForm = () => {
  return (
    <section className="add">
      <form action="add-form">
        <input type="text" className="add-input" />
        <button className="add-button main-black-color">Add</button>
      </form>
    </section>
  );
};

export default ToDoForm;
