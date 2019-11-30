import React, { Component } from "react";
import axios from "axios";

import style from "./Menu.module.css";
import Card from "../Card/Card";
import SearchForm from "../SearchForm/SearchForm";

const initialValue = "";

class Menu extends Component {
  state = {
    products: null
  };

  handleSearchForm = e => {
    e.preventDefault();
    const text = e.target.querySelector("input");
    console.log(text.value);
    text.value = initialValue;
  };

  getProducts = async () => {
    try {
      const url = "http://localhost:3005";
      const result = await axios.get(`${url}/products`);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  };

  componentDidMount() {
    this.getProducts()
      .then(result => {
        this.setState({ products: result.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        <SearchForm handleSearchForm={this.handleSearchForm} />
        <ul className={style.menu}>
          {products &&
            products.map(product => (
              <Card key={product.id} product={product} />
            ))}
        </ul>
        <div className={style.round}></div>
      </div>
    );
  }
}

export default Menu;
