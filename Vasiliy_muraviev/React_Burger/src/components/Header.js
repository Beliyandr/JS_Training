import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
  return (
    <header className="top">
      <div className="wrap">
        <div className="header-content">
          <div className="header-raiting">
            <div className="header-raiting_tag">Рейтинг</div>
            <div className="header-raiting_icon">★★★★★</div>
          </div>

          <div className="header-divider"></div>
          <h1 className="font-effect-fire-animation">{props.title}</h1>
          <h3>
            <span>
              Быстрая доставка горячих
              <span className="sub-header">#бургеров </span>
            </span>
          </h3>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// export default class Header extends Component {
//   render() {
//     return (
//       <header className="top">
//         <div className="wrap">
//           <div className="header-content">
//             <div className="header-raiting">
//               <div className="header-raiting_tag">Рейтинг</div>
//               <div className="header-raiting_icon">★★★★★</div>
//             </div>

//             <div className="header-divider"></div>
//             <h1 className="font-effect-fire-animation">{this.props.title}</h1>
//             <h3>
//               <span>
//                 Быстрая доставка горячих
//                 <span className="sub-header">#бургеров </span>
//               </span>
//             </h3>
//           </div>
//         </div>
//       </header>
//     );
//   }
// }