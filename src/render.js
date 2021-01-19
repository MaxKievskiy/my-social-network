import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './Redux/state'
import {BrowserRouter} from "react-router-dom";
import {addPost, addMessage} from "./Redux/state";

export let rerenderEntireTree = () =>
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} addMessage={addMessage}/>
        </BrowserRouter>,
        document.getElementById('root')
    );


reportWebVitals();
