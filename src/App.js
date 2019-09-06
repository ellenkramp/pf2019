import React from 'react';
import { Route, Router } from 'react-router-dom';
import Header from 'components/Header';
import MyStory from 'components/MyStory';
import Resume from 'components/Resume';
import ContactMe from 'components/ContactMe';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route path="/" exact component={MyStory} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={ContactMe} />
      </Router>
    </div>
  );
}

export default App;
