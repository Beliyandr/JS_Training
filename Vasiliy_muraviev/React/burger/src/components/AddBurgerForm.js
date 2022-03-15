import React, { Component } from "react";
import PropTypes from "prop-types";

export default class AddBurgerForm extends Component {
  static propTypes = {
    addBurger: PropTypes.func,
  };

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createBurger = (event) => {
    event.preventDefault();
    const burger = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value || 0), // parseFloat -перевод зеачения в числовой формат
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };
    // console.log(burger);
    this.props.addBurger(burger);
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="burger-edit" onSubmit={this.createBurger}>
        <input
          ref={this.nameRef}
          name="name"
          type="text"
          placeholder="Name"
          autoComplete="off"
        />
        <input
          ref={this.priceRef}
          name="price"
          type="number"
          placeholder="Price"
          autoComplete="off"
        />
        <select ref={this.statusRef} name="status" className="status">
          <option value="available">Доступно</option>
          <option value="unavailable">Убрать из меню</option>
        </select>
        <textarea
          ref={this.descRef}
          name="desc"
          type="text"
          placeholder="Desc"
        />
        <input
          ref={this.imageRef}
          name="image"
          type="text"
          placeholder="Image"
          autoComplete="off"
        />
        <button type="submit">+Добавить в меню</button>
      </form>
    );
  }
}
