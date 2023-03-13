import React, {Component} from "react"; 
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList.js"

let destination = document.querySelector("#container");

ReactDOM.render (
    <div>
        <TodoList/>
    </div>,
    destination
);