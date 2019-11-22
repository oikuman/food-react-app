import React from "react";

import style from "./Card.module.css";

const Card = ({ product }) => {
  return (
    <li>
      <div className={style.card}>
        <img
          src={product.image}
          alt={product.name}
          className={style.cardImage}
        />
        <div className={style.cardContent}>
          <h2 className={style.cardName}>{product.name}</h2>
          <p className={style.cardPrice}>
            <i className="material-icons">monetization_on</i>
            {product.price} гривен
          </p>
          <p className={style.cardDescr}>{product.description}</p>
        </div>

        <button className={style.cardButton + " " + style.button}>
          <i className="material-icons button__icon">shopping_cart</i>В корзину
        </button>
      </div>
    </li>
  );
};

export default Card;
