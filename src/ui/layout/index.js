import React, { useState }  from 'react';
import Sidebar from './Sidebar';
import Icon from 'ui/components/Icon';
import 'assets/styles/index.scss';
import menuIcon from 'assets/img/menu.png';

const App = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(0);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <div>
      <Icon onClick={toggleMenu} img={menuIcon} className='menu-icon' />
      <Sidebar onClose={toggleMenu} isOpen={openMenu} />
      <div className='body'>
        {children}
      </div>
    </div>
  );
};

export default App;
