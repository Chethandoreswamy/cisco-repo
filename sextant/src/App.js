
import './App.css';
import React from 'react';
import TextLinkExample from './components/header';
import BasicExample from './components/Dtails';

function App() {
  return (
    <>
        <TextLinkExample />
        <div className='datadetails'>
          <BasicExample />
          <BasicExample />
          <BasicExample />
          <BasicExample />
        </div>
        

        

    </>
    
  );
}

export default App;
