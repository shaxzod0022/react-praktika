import React from 'react';
import mpCss from './MenyuProducts.module.css';
import imgBottom from '../images/Vector (1).png';
import apple from '../images/Group 35.png';
import stake from '../images/Steak.png';
import kofe from '../images/Vector (2).png';
import petFood from '../images/pet food.png';
import asvigitel from '../images/Group 36.png';
import dairy from '../images/Dairy Products.png';
import breackFast from '../images/Vector (3).png';
import kipitok from '../images/Vector (4).png';
import health from '../images/Group 39.png';
import coocing from '../images/Group 38.png';

function MenyuProducts () {
  return (
    <div className={mpCss.container}>
      <ul className={mpCss.container__nav}>
        <li>
          <div>
            <span>
              <img src={apple} alt="" />
            </span>
            <span>
              Fruits & Vegetables
            </span>
          </div>
          <span>
            <img src={imgBottom} alt="" />
          </span>
        </li>
        <li>
          <div>
            <span>
              <img src={stake} alt="" />
            </span>
            <span>
              Meat & Fish
            </span>
          </div>
          <span>
            <img src={imgBottom} alt="" />
          </span>
        </li>
        <li>
          <div>
            <span>
              <img src={kofe} alt="" />
            </span>
            <span>
              Snacks
            </span>
          </div>
          <span>
            <img src={imgBottom} alt="" />
          </span>
        </li>
        <li>
          <div>
            <span>
              <img src={petFood} alt="" />
            </span>
            <span>
              Pet Care
            </span>
          </div>
          <span>
            <img src={imgBottom} alt="" />
          </span>
        </li>
        <li>
          <div>
            <span>
              <img src={asvigitel} alt="" />
            </span>
            <span>
              Home & Cleaning
            </span>
          </div>
          <span>
            <img src={imgBottom} alt="" />
          </span>
        </li>
        <li>
          <div>
            <span>
              <img src={dairy} alt="" />
            </span>
            <span>
              Dairy
            </span>
          </div>
          <span>
            <img src={imgBottom} alt="" />
          </span>
        </li>
        <li>
          <div>
            <span>
              <img src={coocing} alt="" />
            </span>
            <span>
              Cooking
            </span>
          </div>
          <span>
            <img src={imgBottom} alt="" />
          </span>
        </li>
        <li>
          <div>
            <span>
              <img src={breackFast} alt="" />
            </span>
            <span>
              Breakfast
            </span>
          </div>
          <span>
            <img src={imgBottom} alt="" />
          </span>
        </li>
        <li>
          <div>
            <span>
              <img src={kipitok} alt="" />
            </span>
            <span>
              Beverage
            </span>
          </div>
          <span>
            <img src={imgBottom} alt="" />
          </span>
        </li>
        <li>
          <div>
            <span>
              <img src={health} alt="" />
            </span>
            <span>
              Health & Beauty
            </span>
          </div>
          <span>
            <img src={imgBottom} alt="" />
          </span>
        </li>
      </ul>
    </div>
  );
}

export default MenyuProducts;
