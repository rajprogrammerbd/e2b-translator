import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import { RootState } from './redux/store';

function App() {
  const isLogin = useSelector((state: RootState) => state.login.isLogin);

  return (
    <>
      <Header isLogin={isLogin} />
      <div className="md:container mx-auto">
        <small>Hello world</small>
      </div>    
    </>
  )
}

export default App
