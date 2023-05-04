import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { store } from "./redux/state";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const rerenderEntireTree = () => {
    root.render(
        <BrowserRouter>
            <App store={store} />
        </BrowserRouter>
    );
};
rerenderEntireTree();
store.subscribe(rerenderEntireTree);
