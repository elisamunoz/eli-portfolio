import React from 'react';
import classnames from 'classnames';
import Button from 'ui/components/Button';
import Avatar from 'ui/components/Avatar/Avatar';
import eliPhoto from 'assets/img/elisa.jpg';
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
      <Button onClick={onClose}>Close</Button>
      <div className="menu-close-btn navigation__content__close-btn" onClick={onClose} />

      <Avatar img={eliPhoto} className="avatar" />

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
