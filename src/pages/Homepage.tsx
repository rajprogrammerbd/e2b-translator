import React from 'react';
import Header from '../components/Header';

function HomePage() {
    return (
        <>
          <Header />
          <div className="md:container mx-auto">
            <h3 className="">Hello World!</h3>
          </div>
        </>
    );
}

export default HomePage;
