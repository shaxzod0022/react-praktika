import React from 'react';
import header from './Header.module.css';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className={header.header}>
      <div className={header.logo}>
        <Link to={'/'}><h1>Todo 🖌️</h1></Link>
      </div>
      <nav className={header.navbar}>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/completed'}>Completed</Link>
          </li>
          <li>
            <Link to={'/not-completed'}>Not Completed</Link>
          </li>
          <li>
            <Link to={'/deleted'}>Deleted</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
