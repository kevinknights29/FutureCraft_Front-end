import React from 'react';
import './App.css';
import GlobalStyles from './styles/globalStyles';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Home /> {/* Use the Home component */}
    </div>
  );
}

export default App;
