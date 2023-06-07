
import React from 'react';
//import ReactDOM from "react-dom";
import {createRoot}  from 'react-dom/client';
import App from './App';
import "./styles/common.css";
import "./styles/chatroom.css"

const root = createRoot(document.getElementById("root"))
root.render
  (
    <App />
  )
 