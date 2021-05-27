import React from 'react';
import './App.css';
import { BrokenComponent } from './BrokenComponent';

function App() {
  return (
    <div className="App">
      <div>Should increment every second:</div>
      <BrokenComponent />
    </div>
  );
}

export default App;
