import React from 'react';
import aboutCss from './About.module.css';
import search from '../images/search.png';

function About () {
  return (
    <div className={aboutCss.container}>
      <div className={aboutCss.container__item}>
        <h1>Groceries Delivered in 90 Minute</h1>
        <p>
          Get your healthy foods & snacks delivered at your doorsteps all day everyday
        </p>
        <div className={aboutCss.search}>
          <input type="text" placeholder="Search your products from here" />
          <button type="button">
            <span><img src={search} alt="" /></span>
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
