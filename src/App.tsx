import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.scss';
import Books from './features/books/books';
import { Button } from 'react-bootstrap';
import CustomTable from './shared/Table/Table';

function App() {


  return (
    <div id='app'>
      <Books  />
      
    </div>
  );
}

export default App;
