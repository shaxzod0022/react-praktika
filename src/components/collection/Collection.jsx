import React from 'react';
import collectCss from './Collection.module.css';
import img2 from '../images/Group 31.png';
import leftBtn from '../images/chevron-down.png';
import rightBtn from '../images/chevron-down (1).png';
function Collection () {
  return (
    <div className={collectCss.container}>
      <div className={collectCss.btns}>
        <button type="button">
          <img src={leftBtn} alt="" />
        </button>
        <button type="button">
          <img src={rightBtn} alt="" />
        </button>
      </div>
      <div className={collectCss.container__item}>
        <div className={collectCss.container__item__box}>
          <h2>
            Stay home <br />
            we deliver
          </h2>
          <p>Any where... Any time!!</p>
        </div>
        <div className={collectCss.container__item__box}>
          <div>
            <h2>
              Banana
            </h2>
            <strong>19 999 <sub><del>25 999 UZS</del></sub> </strong>
            <button type="button">Buy Now</button>
          </div>
          <img src={img2} alt="" />
        </div>
        <div className={collectCss.container__item__box}>
          <h3>
            We have everything <br /> convenient and very fast.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Collection;
