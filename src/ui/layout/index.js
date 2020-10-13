import React, { useState }  from 'react';
import Sidebar from './Sidebar';
import Button from 'ui/components/Button';
import 'assets/styles/index.scss';

const App = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(0);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <div>
      <Button onClick={toggleMenu}>Open</Button>
      <Sidebar onClose={toggleMenu} isOpen={openMenu} />
      <div className='body'>
        {children}
      </div>
    </div>
  );
};

export default App;
