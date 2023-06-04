
import React from 'react';
import {createRoot}  from 'react-dom/client';
import App from './App';
import "./styles/common.css";
import "./styles/chatrooms.css"

const root = createRoot(document.getElementById("root"))
root.render
  (
    <App />
  )
