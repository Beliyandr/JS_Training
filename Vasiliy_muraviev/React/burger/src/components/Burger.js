import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Burgers extends Component {
  static propTypes = {
    deteils: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      desc: PropTypes.string,
      status: PropTypes.string,
    }),
    index: PropTypes.string,
    addToOrder: PropTypes.func,
  };

  render() {
    const { name, image, desc, price, status } = this.props.details;
    const isAvailable = status === "available";
    // console.log(this.props.details);
    return (
      <li className="menu-burger">
        <div className="image-container">
          <img src={image} alt={name} />
        </div>
        <div className="burger-details">
          <h3 className="burger-name">
            {name}
            <span className="price">{price} ₽</span>
          </h3>
          <p> {desc}</p>
          <button
            disabled={!isAvailable}
            className="buttonOrder"
            onClick={() => this.props.addToOrder(this.props.index)}
          >
            {isAvailable ? "Заказать" : "Временно нет"}
          </button>
        </div>
      </li>
    );
  }
}
