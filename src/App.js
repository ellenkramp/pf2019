import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Header from 'components/Header';
import MyStory from 'components/MyStory';
import Resume from 'components/Resume';
import ContactMe from 'components/ContactMe';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={MyStory} />
        <Route path="/resume" component={Resume} />
        <Route path="/contactme" component={ContactMe} />
      </div>
    </Router>
  );
}

export default App;
