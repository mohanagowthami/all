import React from 'react';
import './App.css'
import Transform from './compo'
import  Downarrow from'./downarrow'
import Grid from './grid'


function App() {
  return (
    <div className="appstyles">
      <div>
        <Transform/>
      </div>
      
      <div>
        <Downarrow/>
      </div>
      <div>
        <Grid rows={4} cols={4} />
      </div>
    </div>
  );
}

export default App;
