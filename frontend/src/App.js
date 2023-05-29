import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Banner from './Banner';
import MainZone from './MainZone';
import ArticleZone from './ArticleZone';
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Banner />
        <div className="content">
        <MainZone />
        <ArticleZone />
        <form>
          
        </form>
        </div>
      </div>
    </Router>

  );
}

export default App;
