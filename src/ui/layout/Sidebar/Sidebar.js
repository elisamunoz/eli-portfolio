import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { linkTo } from 'const';
import Avatar from 'ui/components/Avatar/Avatar';
import Icon from 'ui/components/Icon';
import eliPhoto from 'assets/img/elisa.jpg';
import './Sidebar.scss';

const Link = ({ label, href, onClick }) => (
  <NavLink
    to={href}
    className='link'
    activeClassName="selected"
    onClick={onClick}
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
      <div className='avatar_icon'>
        <Icon onClick={onClose} name='times' className='close-icon' />
        <Avatar img={eliPhoto} className='avatar-sidebar' />
      </div>
      <div className="navigation__content__link">
        <Link onClick={onClose} href={linkTo.homeHome} label='Home' />
        <Link onClick={onClose} href={linkTo.homePortfolio} label='Portfolio' />
        <Link onClick={onClose} href={linkTo.homeAbout} label='About me' />
        <Link onClick={onClose} href={linkTo.homeContact} label='Contact me' />
      </div>
    </div>
  </nav>
);

Link.propType = {
  label: PropTypes.any,
  href: PropTypes.string,
  onClick: PropTypes.func,
}

Link.propType = {
  onClose: PropTypes.func,
  isOpen: PropTypes.func,
}

export default Sidebar;
