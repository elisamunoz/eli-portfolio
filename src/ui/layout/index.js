import React from 'react';
import { useBoolean } from 'hooks/useBoolean';
import Sidebar from './Sidebar';
import Icon from 'ui/components/Icon';
import 'assets/styles/index.scss';

const App = ({ children }) => {
  const [isOpen, actionsIsOpen] = useBoolean(false);

  return (
    <div>
      <Icon onClick={actionsIsOpen.setTrue} name='bars' className='menu-icon' />
      <Sidebar onClose={actionsIsOpen.setFalse} isOpen={isOpen} />
      <div className='body'>
        {children}
      </div>
    </div>
  );
};

export default App;
