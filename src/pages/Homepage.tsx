import React from 'react';
import { useFlags } from 'flagsmith/react';
import Header from '../components/Header';

function HomePage() {
  const featureFlags = useFlags(['demo_flag_for_testing']);
  const flags =  featureFlags['demo_flag_for_testing'].enabled;

    return (
        <>
          <Header />
          <div className="md:container mx-auto">
            {flags ? <h3 className="">Hello World!</h3> : null }
          </div>
        </>
    );
}

export default HomePage;
