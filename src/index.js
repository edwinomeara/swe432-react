import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Jumbotron } from 'react-bootstrap';

ReactDOM.render(
  <React.StrictMode>
    <Jumbotron fluid className="bg-dark">
      <h1 className="ml-3 text3">SWE 432 Assignment 7</h1>
      <p className="ml-5 text3">
        Add assignments as needed, check if complete, and remove when finished.
      </p>
    </Jumbotron>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
