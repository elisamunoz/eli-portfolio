import React from 'react';
import classnames from 'classnames';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { linkTo } from 'const';
import Avatar from 'ui/components/Avatar/Avatar';
import Icon from 'ui/components/Icon';
import eliPhoto from 'assets/img/elisa.jpg';
import './Sidebar.scss';

const Link = ({ label, href }) => (
  <NavLink
    to={href}
    className='link'
    activeClassName="selected"
  >
    {label}
  </NavLink>
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
      <Icon onClick={onClose} name='times' className='close-icon' />

      <Avatar img={eliPhoto} className='avatar-sidebar' />

      <div className="navigation__content__link">
        <Link href={linkTo.homeHome} label='Home' />
        <Link href={linkTo.homePortfolio} label='Portfolio' />
        <Link href={linkTo.homeAbout} label='About me' />
        <Link href={linkTo.homeContact} label='Contact me' />
      </div>
    </div>
  </nav>
);

export default Sidebar;
