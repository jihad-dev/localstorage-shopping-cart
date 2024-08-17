import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';

const App = () => {
  return (
    <div className='lg:px-11 px-11'>
      <Navbar/>
      <Products/>
    </div>
  );
};

export default App;