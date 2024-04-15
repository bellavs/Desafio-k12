import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/HomePage';
import Post from './components/Post/Post';
import Contato from './components/Contato/Contato';
import Login from './components/Login/Login';
import './styles.css'; 


function App() {
  return (
    <Router>
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;