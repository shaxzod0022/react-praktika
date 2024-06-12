import React from 'react';
import headCss from './Header.module.css';
import logo from '../images/Group 8.png';
import subMenyu from '../images/Vector.png';
import apple from '../images/Group.png';
function Header () {
  return (
    <div className={headCss.container}>
      <div className={headCss.container__item}>
        <div className={headCss.logo__brend}>
          <img src={logo} alt="" />
        </div>
        <div className={headCss.sub__menyu}>
          <button type="button">
            <span><img src={apple} alt="" /></span>
            <span>Grocery</span>
            <span><img src={subMenyu} alt="" /></span>
          </button>
        </div>
      </div>

      <div className={headCss.navbar}>
        <ul className={headCss.nav}>
          <li>
            <a href="">Shops</a>
          </li>
          <li>
            <a href="">Offers</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <div className={headCss.btn}>
          <button type="button">Join</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
