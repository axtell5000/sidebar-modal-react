import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';

import { AppContext, useGlobalContext } from './context';

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();
  
  return (
    <main>
      <button onClick={openSidebar} className='sidebar-toggle' title="Toggle Sidebar">
        <FaBars />
      </button>
      <button onClick={openModal} className='btn' title="Show Modal">
        show modal
      </button>
    </main>
  );
};

export default Home;
