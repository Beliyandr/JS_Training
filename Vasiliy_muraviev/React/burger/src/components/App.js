import React, { Component } from "react";

import Header from "./Header";
import Order from "./Order";
import MenuAdmin from "./MenuAdmin";
import sampleBurgers from "../sample-burgers";
import Burger from "./Burger";
import SingnIn from "./Auth/SingnIn";

import base from "../base";
import firebase from "firebase/app";

import PropTipes from "prop-types";

export default class App extends Component {
  static propTypes = {
    match: PropTipes.object,
  };

  state = {
    burgers: {},
    order: {},
  };
  componentDidMount() {
    const { params } = this.props.match;

    const localStorageRef = localStorage.getItem(params.restaurantId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    this.ref = base.syncState(`${params.restaurantId}/burgers`, {
      context: this,
      state: "burgers",
    });
  }

  componentDidUpdate() {
    const { params } = this.props.match;
    console.log("UPDATED");
    localStorage.setItem(params.restaurantId, JSON.stringify(this.state.order));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addBurger = (burger) => {
    // 1.Делаем копию объекта state
    const burgers = { ...this.state.burgers };
    // 2. Добавить новый бургер в переменную burgers
    burgers[`burger${Date.now()}`] = burger;
    // 3. Записать новый объкт burgers  в state
    this.setState({ burgers });
  };

  loadSampleBurgers = () => {
    this.setState({ burgers: sampleBurgers });
  };

  addToOrder = (key) => {
    //1.Делаем копию объекта state
    const order = { ...this.state.order };
    //2.Добавить ключ к заказу со значение 1, либо обновить текущее значение
    order[key] = order[key] + 1 || 1;
    //3.Записываем наше обновленноре значение order в state
    this.setState({ order });
  };

  updateBurger = (key, updatedBurger) => {
    // 1.Делаем копию объекта state
    const burgers = { ...this.state.burgers };
    // 2. Обновляем нужный бургер
    burgers[key] = updatedBurger;
    // 3. Обновленный бургер добавляем в state
    this.setState({ burgers });
  };

  deleteBurger = (key) => {
    // 1.Делаем копию объекта state
    const burgers = { ...this.state.burgers };
    // 2.удаляем burgers
    burgers[key] = null;
    // 3. Обновленный бургер добавляем в state
    this.setState({ burgers });
  };

  deleteFromOrder = (key) => {
    // 1.Делаем копию объекта state
    const order = { ...this.state.order };
    // 2.удаляем burger
    delete order[key];
    // 3. Записываем наш order в state
    this.setState({ order });
  };

  handleLogOut = async () => {
    await firebase.auth().signOut();
    window.location.reload();
  };

  render() {
    return (
      <SingnIn>
        <div className="burger-paradise">
          <div className="menu">
            <Header title="Very Hot Burger" />
            <ul className="burgers">
              {Object.keys(this.state.burgers).map((key) => {
                return (
                  <Burger
                    key={key}
                    index={key}
                    details={this.state.burgers[key]}
                    addToOrder={this.addToOrder}
                  />
                );
              })}
            </ul>
          </div>
          <Order
            burgers={this.state.burgers}
            order={this.state.order}
            deleteFromOrder={this.deleteFromOrder}
          />
          {/* <Order {...this.state} /> */}
          <MenuAdmin
            addBurger={this.addBurger}
            loadSampleBurgers={this.loadSampleBurgers}
            burgers={this.state.burgers}
            updateBurger={this.updateBurger}
            deleteBurger={this.deleteBurger}
            handleLogOut={this.handleLogOut}
          />
        </div>
      </SingnIn>
    );
  }
}
