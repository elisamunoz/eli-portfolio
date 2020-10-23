import React from 'react';
import classnames from 'classnames';
import Avatar from 'ui/components/Avatar/Avatar';
import Link from 'ui/components/Link/Link';
import Icon from 'ui/components/Icon';
import eliPhoto from 'assets/img/elisa.jpg';
import closeIcon from 'assets/img/close.png';
import './Sidebar.scss';

const Sidebar = ({ onClose, isOpen }) => (
  <nav
    id='navigation'
    className={classnames(
      'navigation',
      isOpen && 'isOpen'
    )}
  >
    <div className="navigation__content">
      <Icon onClick={onClose} img={closeIcon} className='close-icon' />

      <Avatar img={eliPhoto} className='avatar-sidebar' />

      <div className="navigationLink">
        <Link onClick={onClose} href='#home'>Home</Link>
        <Link onClick={onClose} href='#portfolio'>Portfolio</Link>
        <Link onClick={onClose} href='#about'>About Me</Link>
        <Link onClick={onClose} href='#contact'>Contact Me</Link>
      </div>
    </div>
  </nav>
);

export default Sidebar;
