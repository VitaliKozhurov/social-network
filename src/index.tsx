import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App, { AppPropsType } from "./App";
import { addPost, changeText } from "./redux/state";
import { state } from "./redux/state";
import { subscribe } from "./redux/state";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const rerenderEntireTree = () => {
    root.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} changeText={changeText} />
        </BrowserRouter>
    );
};
rerenderEntireTree();
subscribe(rerenderEntireTree);
