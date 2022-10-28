import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './style.css';
import App from "./App";


const container = document.querySelector('#container');
const root=ReactDOM.createRoot(container);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
