import React from 'react';
import classnames from 'classnames';
import Button from 'ui/components/Button';
import Avatar from 'ui/components/Avatar/Avatar';
import Icon from 'ui/components/Icon';
import eliPhoto from 'assets/img/elisa.jpg';
import closeIcon from 'assets/img/close.png';
import './Sidebar.scss';

const Link = ({ label, href }) => (
  <a
    className="link"
    href={href}>
    {label}
  </a>
);

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

      <div className="navigation__content__link">
        <Link href='#' label='Home' />
        <Link href='#' label='Projects' />
        <Link href='#' label='About me' />
        <Link href='#' label='Contact me' />
      </div>
    </div>
  </nav>
);

export default Sidebar;
