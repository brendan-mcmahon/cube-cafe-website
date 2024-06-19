import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/Home';
import Walkthrough from './pages/Walkthrough';
import { Link as ScrollLink } from 'react-scroll';
import './App.scss';

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <ScrollLink
                to="section1"
                smooth={true}
                duration={500}
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="section2"
                smooth={true}
                duration={500}
              >
                Overview Video
              </ScrollLink>
            </li>
            <li>
              <a href="/Cube Cafe Rulebook.pdf">Rulebook</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="content">
        <div id="section1" className="section">
          <Home />
        </div>
        <div id="section2" className="section">
          <h2>Watch an Overview:</h2>
          <Walkthrough />
        </div>
      </div>
    </>
  );
}

export default App;
