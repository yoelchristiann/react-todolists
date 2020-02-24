import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="frame">
        <section className="header">
          <button className="header-button main-black-color ">Add</button>
          <h1 className="header-title">Todo Lists</h1>
          <button className="header-button main-red-color">Clear</button>
        </section>

        <section className="add">
          <form action="add-form">
            <input type="text" className="add-input" />
            <button className="add-button main-black-color">Add</button>
          </form>
        </section>

        <section className="todos">
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
        </section>
      </div>
    </div>
  );
}
