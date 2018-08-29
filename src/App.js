import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import FrontPage from '../src/containers/FrontPage/FrontPage';

class App extends Component {
  render() {
    
    return (
      <BrowserRouter>
        <div className="App">
          <FrontPage />
        </div>
      </BrowserRouter>


    );
  }
}

export default App;
