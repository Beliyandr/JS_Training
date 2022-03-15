//! HOOK

import React, { useState } from "react";
import restaurants from "../sample-restaurants";
import PropTypes from "prop-types";

const Landing = (props) => {
  const [display, toggleDisplay] = useState(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const displayList = () => {
    toggleDisplay(!display);
  };

  const getTitle = (restaurant) => {
    const { title, url } = restaurant;
    setUrl(url);
    setTitle(title);
    toggleDisplay(false);
  };

  const goToRestaurant = () => {
    props.history.push(`/restaurant/${url}`);
  };

  return (
    <div className="restaurant_select">
      <div className="restaurant_select_top">
        <div
          onClick={displayList}
          className="restaurant_select_top-header font-effect-outline"
        >
          {title ? title : "Выберите ресторан"}
        </div>
        <div className="arrow_picker">
          <div className="arrow_picker-up"></div>
          <div className="arrow_picker-down"></div>
        </div>
      </div>

      {display ? (
        <div className="restaurant_select_bottom">
          <ul>
            {restaurants.map((restaurant) => {
              return (
                <li
                  onClick={() => {
                    getTitle(restaurant);
                  }}
                  key={restaurant.id}
                >
                  {restaurant.title}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
      {title && !display ? (
        <button onClick={goToRestaurant}> Перейти в ресторан</button>
      ) : null}
    </div>
  );
};

Landing.propTypes = {
  history: PropTypes.object,
};

export default Landing;

//!COMPONENT

// import React from "react";
// import restaurants from "../sample-restaurants";
// import PropTypes from "prop-types";

// class Landing extends React.Component {
//   static propTypes = {
//     history: PropTypes.object,
//   };

//   state = {
//     display: false,
//     title: "",
//     url: "",
//   };

//   displayList = () => {
//     const { display } = this.state;

//     this.setState({ display: !display });
//   };

//   getTitle = (restaurant) => {
//     const { title, url } = restaurant;
//     this.setState({ title, url, display: false });
//   };

//   goToRestaurant = () => {
//     const { url } = this.state;
//     this.props.history.push(`/restaurant/${url}`);
//   };

//   render() {
//     return (
//       <div className="restaurant_select">
//         <div className="restaurant_select_top">
//           <div
//             onClick={this.displayList}
//             className="restaurant_select_top-header font-effect-outline"
//           >
//             {this.state.title ? this.state.title : "Выберите ресторан"}
//           </div>
//           <div className="arrow_picker">
//             <div className="arrow_picker-up"></div>
//             <div className="arrow_picker-down"></div>
//           </div>
//         </div>

//         {this.state.display ? (
//           <div className="restaurant_select_bottom">
//             <ul>
//               {restaurants.map((restaurant) => {
//                 return (
//                   <li
//                     onClick={() => {
//                       this.getTitle(restaurant);
//                     }}
//                     key={restaurant.id}
//                   >
//                     {restaurant.title}
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         ) : null}
//         {this.state.title && !this.state.display ? (
//           <button onClick={this.goToRestaurant}> Перейти в ресторан</button>
//         ) : null}
//       </div>
//     );
//   }
// }

// export default Landing;

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
