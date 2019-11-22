import React, { Component } from "react";
import axios from "axios";
import style from "./Menu.module.css";
import Card from "../Card/Card";

class Menu extends Component {
  state = {
    products: null
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
      <ul className={style.menu}>
        {products &&
          products.map(product => <Card key={product.id} product={product} />)}
      </ul>
    );
  }
}

export default Menu;
