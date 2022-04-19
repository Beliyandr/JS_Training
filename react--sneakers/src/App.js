// import bd from "./bd";

function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <div className="drawerTitle">
            <h2> Корзина</h2>
            <img
              width={30}
              height={30}
              className="closeBtn"
              src="/img/btn_remove.svg"
              alt="remove"
            ></img>
          </div>
          <div className="cartItems">
            <div className="cartItem d-flex align-center justify-between">
              <img
                width={70}
                height={70}
                src="/img/sneakers/1.jpg"
                alt="Кросовки"
                className="mr-20"
              />
              <div className="cartName mr-10">
                <p className="mb-5 ">Мужские Кроссовки Nike Air Max 270</p>
                <b>12999 грн </b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn_remove.svg"
                alt="remove"
              ></img>
            </div>
            <div className="cartItem d-flex align-center justify-between">
              <img
                width={70}
                height={70}
                src="/img/sneakers/1.jpg"
                alt="Кросовки"
                className="mr-20"
              />
              <div className="cartName mr-10">
                <p className="mb-5 ">Мужские Кроссовки Nike Air Max 270</p>
                <b>12999 грн </b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn_remove.svg"
                alt="remove"
              ></img>
            </div>
            <div className="cartItem d-flex align-center justify-between">
              <img
                width={70}
                height={70}
                src="/img/sneakers/1.jpg"
                alt="Кросовки"
                className="mr-20"
              />
              <div className="cartName mr-10">
                <p className="mb-5 ">Мужские Кроссовки Nike Air Max 270</p>
                <b>12999 грн </b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn_remove.svg"
                alt="remove"
              ></img>
            </div>
            <div className="cartItem d-flex align-center justify-between">
              <img
                width={70}
                height={70}
                src="/img/sneakers/1.jpg"
                alt="Кросовки"
                className="mr-20"
              />
              <div className="cartName mr-10">
                <p className="mb-5 ">Мужские Кроссовки Nike Air Max 270</p>
                <b>12999 грн </b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn_remove.svg"
                alt="remove"
              ></img>
            </div>
          </div>
          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b> 21 498 грн</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b> 100 грн</b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
            </button>
          </div>
        </div>
      </div>

      <header className="d-flex justify-between align-center">
        <div className="headerLeft d-flex align-center">
          <img src="/img/logo.svg" alt="Логотип" />
          <div className="headerInfo">
            <h3> React sneakers</h3>
            <p>Магазин лучших кросовок</p>
          </div>
        </div>
        <ul className="headerRigth d-flex">
          <li>
            <img src="/img/cart.svg" alt="Корзина" />
            <span className="ml-10"> 1205 грн</span>
          </li>
          <li>
            <img src="/img/heart.svg" alt="Like" />
          </li>
          <li>
            <img src="/img/user.svg" alt="Пользователь" />
          </li>
        </ul>
      </header>
      <div className="content">
        <div className="top align-center">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <button className="search"></button>
            <input type="text" placeholder="поиск..." />
          </div>
        </div>
        <div className="sneakers d-flex flex-wrap justify-between">
          <div className="card">
            <div className="favorite">
              <img
                width={20}
                height={20}
                src="/img/heart_unliked.svg"
                alt="liked"
              />
            </div>
            <img src="/img/sneakers/1.jpg" alt="Кроссовки" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b> 12 999 грн</b>
              </div>
              <button className="button">
                <img src="/img/button_unchecked.svg" alt="Кнопка добавить" />
              </button>
            </div>
          </div>
          <div className="card ">
            <div className="favorite">
              <img
                width={20}
                height={20}
                src="/img/heart_liked.svg"
                alt="liked"
              />
            </div>
            <img src="/img/sneakers/2.jpg" alt="Кроссовки" />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b> 12 999 грн</b>
              </div>
              <button className="button">
                <img src="/img/button_checked.svg" alt="Кнопка добавить" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img
                width={20}
                height={20}
                src="/img/heart_unliked.svg"
                alt="liked"
              />
            </div>
            <img src="/img/sneakers/3.jpg" alt="Кроссовки" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b> 8450 грн</b>
              </div>
              <button className="button">
                <img src="/img/button_unchecked.svg" alt="Кнопка добавить" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img
                width={20}
                height={20}
                src="/img/heart_unliked.svg"
                alt="liked"
              />
            </div>
            <img src="/img/sneakers/4.jpg" alt="Кроссовки" />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b> 8920 грн</b>
              </div>
              <button className="button">
                <img src="/img/button_unchecked.svg" alt="Кнопка добавить" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
