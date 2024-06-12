import React from 'react';
import korzinkaCss from './Korzinka.module.css';
import shopImg from '../images/ic_baseline-shopping-bag.png';

function Korzinka () {
  return (
    <div className={korzinkaCss.container}>
      <div className={korzinkaCss.container__item}>
        <span><img src={shopImg} alt="" /></span>
        <span>0 Item</span>
      </div>
      <div className={korzinkaCss.stena}>
        <span>$0.00</span>
      </div>
    </div>
  );
}

export default Korzinka;
