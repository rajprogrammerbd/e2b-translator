import React from 'react';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import NonLoginHomeContent from '../components/NonLoginHomeContent';

function HomePage() {

  const isLogin = useSelector((state: RootState) => state.login.isLogin);

    return (
        <>
          <Header />
          <div className="md:container mx-auto prose">
            {isLogin ? null : <NonLoginHomeContent />}
          </div>
        </>
    );
}

export default HomePage;
