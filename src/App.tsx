import React from 'react';
import Header from './components/Header';

function App() {

  return (
    <>
      <Header isLogin={false} />
      <div className="md:container mx-auto">
        <small>Hello world</small>
      </div>    
    </>
  )
}

export default App
