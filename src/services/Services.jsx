import React from 'react';
import servicCss from './Services.module.css';
import codeImg from '../imgs/programming-code.10.svg';
import reactImg from '../imgs/react-original.svg';
import flutterImg from '../imgs/flutter-original.svg';
function Services () {
  return (
    <div className={servicCss.container}>
      <div className={servicCss.container__item__top}>
        <div className={servicCss.item__top__icons}>
          <span>
            <img src={codeImg} alt="" />
          </span>
          <span className={servicCss.top__icons__text}>
            Services
          </span>
        </div>
        <h2>We Provide <br /> Such Services</h2>
        <div className={servicCss.container__item}>
          <h3>Mobile app development</h3>
          <p>
            We can create a customized e-commerce solution that fits your business needs and helps you increase your online sales.
          </p>
        </div>
        <div className={servicCss.item__bottom__icons}>
          <span>
            <img src={reactImg} alt="" />
          </span>
          <span>
            <img src={flutterImg} alt="" />
          </span>
        </div>
      </div>
      <div className={servicCss.container__item__center}>
        <div className={servicCss.center__item}>
          <h3>WEB Dev</h3>
          <a href="">Web Development</a>
        </div>
        <div className={servicCss.center__item}>
          <h3>Support</h3>
          <a href=''>Website Maintenance</a>
          <p>
            We provide ongoing maintenance and support services to ensure your website stays up to date and secure, giving you peace of mind.
          </p>
          <img src={codeImg} alt="" />
        </div>
        <div className={servicCss.center__item}>
          <h3>UX / UI Design</h3>
          <p>
            We focus on creating intuitive and visually appealing user interfaces (UI) and user experiences (UX) to ensure your website is easy to use and engages your audience.
          </p>
        </div>
      </div>
      <div className={servicCss.container__items}>
        <div className={servicCss.container__item}>
          <h3>Custom Software Development</h3>
          <p>
            We can build customized software solutions that address your unique business needs and help you streamline your operations.
          </p>
          <img src={codeImg} alt="" />
        </div>
        <div className={servicCss.container__item}>
          <h3>Search Engine Marketing</h3>
          <p>
            Our SEM services include pay-per-click advertising campaigns and remarketing strategies to drive more traffic and conversions to your website.
          </p>
          <img src={codeImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Services;
