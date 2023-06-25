import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MainZone from './components/MainZone';
import ArticleZone from './components/ArticleZone';
import './App.css'
import AddPost from './components/AddPost';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Banner />
        <div className="content">
        <MainZone />
        <ArticleZone />
        <AddPost />
        </div>
      </div>
    </Router>

  );
}

export default App;
