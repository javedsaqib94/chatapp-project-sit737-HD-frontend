import React from "react";
import { BrowserRouter} from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import DashboardsPage from "./Pages/DashboardsPage";
import IndexPage from "./Pages/indexPage";



function App() {
return (
<BrowserRouter> 
  <Routes>
    <Route path ="/"  element = {<IndexPage/>}  />
    <Route path ="/login"  element = {<LoginPage/>}/>
    <Route path ="/register" element = {<RegisterPage/>}/> 
    <Route path ="/dashboard" element = {<DashboardsPage/>}/> 
  </Routes>
</BrowserRouter>
);
}

export default App;
