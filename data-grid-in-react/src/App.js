import React from 'react';
import { GridContainer } from './components/grid';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


function App() {
  return (
    <div className="App">
      <h2 className="text-center">Data Grid using React</h2>
      <GridContainer />
    </div>
  );
}

export default App;
