import React from 'react';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import NonLoginHomeContent from '../components/NonLoginHomeContent';
import LoggedInHomeComponent from '../components/LoggedInHomeComponent';

function HomePage() {

  const isLogin = useSelector((state: RootState) => state.login.isLogin);

    return (
        <>
          <Header />
          <div className="md:container mx-auto prose flex items-center justify-center flex-col">
            {isLogin ? <LoggedInHomeComponent />: <NonLoginHomeContent />}
          </div>
        </>
    );
}

export default HomePage;
