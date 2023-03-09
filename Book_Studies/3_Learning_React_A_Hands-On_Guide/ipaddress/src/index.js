import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import IPAddresContainer from "./IPAddresContainer";

let destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <IPAddresContainer/>
    </div>,
    destination
);