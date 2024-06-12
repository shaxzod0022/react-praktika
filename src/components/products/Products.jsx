import React from 'react';
import prodCss from './Products.module.css';
import productImg1 from '../images/image 1.png';
import productImg2 from '../images/image 3.png';
import productImg3 from '../images/image 2.png';
import productImg4 from '../images/image 6.png';
import pilus from '../images/Vector (5).png';
import minus from '../images/Vector (6).png';
let productsData = [
  {
    id: 0,
    img: productImg1,
    sena: 19900,
    name: 'Банан, кг',
    btnText: 'Купить',
    btnPilus: pilus,
    btnMinus: minus,
    discount: '25%',
  },
  {
    id: 1,
    img: productImg2,
    sena: 12000,
    name: 'Помидор канадский с ветчиной большой дорогой, кг',
    btnText: 2,
    btnPilus: pilus,
    btnMinus: minus,
    discount: '25%',
  },
  {
    id: 2,
    img: productImg3,
    sena: 5900,
    name: 'Капуста тонколистная и ясноцветная, кг',
    btnText: 'Купить',
    btnPilus: pilus,
    btnMinus: minus,
    discount: '25%',
  },
  {
    id: 3,
    img: productImg4,
    sena: 8900,
    name: 'Картофель Ургут крупный, кг',
    btnText: 'Купить',
    btnPilus: pilus,
    btnMinus: minus,
    discount: '25%',
  },
];
function Products () {
  return (
    <div>
      <div className={prodCss.container}>
        {productsData.map (item => {
          return (
            <div className={prodCss.card}>
              <div className={prodCss.card__img}>
                <img src={item.img} alt="" />
              </div>
              <div className={prodCss.card__sena}>
                <strong>{item.sena}</strong>
                <span>сум / 1кг</span>
              </div>
              <div className={prodCss.card__text}>
                <p><strong>{item.name}</strong></p>
              </div>
              <div className={prodCss.card__btns}>
                <button type="button">{item.btnText}</button>
                <button className={prodCss.pilus}>
                  <img src={item.btnPilus} alt="" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className={prodCss.container}>
        {productsData.map (item => {
          return (
            <div className={prodCss.card}>
              <div className={prodCss.card__img}>
                <img src={item.img} alt="" />
              </div>
              <div className={prodCss.card__sena}>
                <strong>{item.sena}</strong>
                <span>сум / 1кг</span>
              </div>
              <div className={prodCss.card__text}>
                <p><strong>{item.name}</strong></p>
              </div>
              <div className={prodCss.card__btns}>
                <button type="button">{item.btnText}</button>
                <button className={prodCss.pilus}>
                  <img src={item.btnPilus} alt="" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className={prodCss.container}>
        {productsData.map (item => {
          return (
            <div className={prodCss.card}>
              <div className={prodCss.card__img}>
                <img src={item.img} alt="" />
              </div>
              <div className={prodCss.card__sena}>
                <strong>{item.sena}</strong>
                <span>сум / 1кг</span>
              </div>
              <div className={prodCss.card__text}>
                <p><strong>{item.name}</strong></p>
              </div>
              <div className={prodCss.card__btns}>
                <button type="button">{item.btnText}</button>
                <button className={prodCss.pilus}>
                  <img src={item.btnPilus} alt="" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
