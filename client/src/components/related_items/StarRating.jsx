import React from 'react';
import styles from './relateditems.module.css';

const StarRating = (props) => {
  let starArray = [];
  let currRating = props.rating;
  for (let i = 0; i < 5; i++) {
    if (currRating === .25) {
      starArray.push(<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 28 28" key={i}>
        <path d="M14.8915 3.55766C14.7942 3.36044 14.6346 3.20082 14.4374 3.10349C13.9421 2.85906 13.3425 3.0624 13.0981 3.55766L10.1742 9.48206L3.63623 10.4321C3.41859 10.4637 3.21745 10.5662 3.06394 10.7237C2.67844 11.1192 2.68653 11.7523 3.08202 12.1378L7.81294 16.7493L6.69612 23.2608C6.65894 23.4776 6.69426 23.7006 6.7966 23.8952C7.0536 24.3841 7.65822 24.572 8.14707 24.315L13.9948 21.2407L19.8425 24.315C20.0372 24.4173 20.2602 24.4527 20.4769 24.4155C21.0213 24.3221 21.3868 23.8052 21.2935 23.2608L20.1767 16.7493L24.9076 12.1378C25.0651 11.9843 25.1676 11.7831 25.1992 11.5655C25.2786 11.0189 24.8999 10.5115 24.3534 10.4321L17.8154 9.48206L14.8915 3.55766ZM11 10.8778L11.1703 10.8531L13.9948 5.13L16.8193 10.8531L23.1351 11.7708L18.5649 16.2256L19.6438 22.5159L13.9948 19.546L11 21.1205V10.8778Z" fill="#212121"/>
      </svg>);
      currRating = 0;
    } else if (currRating === .50) {
      starArray.push(<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 28 28" key={i}>
        <path d="M14.8915 3.55766C14.7942 3.36044 14.6346 3.20082 14.4374 3.10349C13.9421 2.85906 13.3425 3.0624 13.0981 3.55766L10.1742 9.48206L3.63623 10.4321C3.41859 10.4637 3.21745 10.5662 3.06394 10.7237C2.67844 11.1192 2.68653 11.7523 3.08202 12.1378L7.81294 16.7493L6.69612 23.2608C6.65894 23.4776 6.69426 23.7006 6.7966 23.8952C7.0536 24.3841 7.65822 24.572 8.14707 24.315L13.9948 21.2407L19.8425 24.315C20.0372 24.4173 20.2602 24.4527 20.4769 24.4155C21.0213 24.3221 21.3868 23.8052 21.2935 23.2608L20.1767 16.7493L24.9076 12.1378C25.0651 11.9843 25.1676 11.7831 25.1992 11.5655C25.2786 11.0189 24.8999 10.5115 24.3534 10.4321L17.8154 9.48206L14.8915 3.55766ZM14 19.5487V5.14053L16.8193 10.8531L23.1351 11.7708L18.5649 16.2256L19.6438 22.5159L14 19.5487Z" fill="#212121"/>
      </svg>);
      currRating = 0;
    } else if (currRating === .75) {
      starArray.push(<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 28 28" key={i}>
        <path d="M13.5524 3.10349C13.3552 3.20082 13.1955 3.36044 13.0982 3.55766L10.1743 9.48206L3.63637 10.4321C3.08983 10.5115 2.71113 11.0189 2.79055 11.5655C2.82218 11.7831 2.92466 11.9843 3.08215 12.1378L7.81306 16.7493L6.69625 23.2608C6.60289 23.8052 6.96847 24.3221 7.51281 24.4155C7.5399 24.4201 7.5671 24.4236 7.59432 24.426C7.78487 24.4428 7.97687 24.4046 8.1472 24.315L13.9949 21.2407L19.8427 24.315C19.9038 24.3471 19.9667 24.3723 20.0305 24.3908C20.4772 24.5203 20.9683 24.323 21.1931 23.8952C21.2059 23.8709 21.2177 23.8461 21.2284 23.821C21.3032 23.6449 21.3261 23.4505 21.2936 23.2609C21.2936 23.2608 21.2936 23.2609 21.2936 23.2609L20.1768 16.7493L24.9077 12.1378C24.9572 12.0896 25.0005 12.0375 25.0379 11.9826C25.2991 11.5977 25.2631 11.0697 24.9258 10.7237C24.7723 10.5662 24.5711 10.4637 24.3535 10.4321L17.8155 9.48206L14.8917 3.55766C14.7174 3.20459 14.3627 2.99989 13.9939 3C13.8454 3.00004 13.6946 3.03331 13.5524 3.10349ZM16.9897 21.1205V10.8778L23.1352 11.7708L18.5651 16.2256L19.644 22.5159L16.9897 21.1205Z" fill="#212121"/>
      </svg>);
      currRating = 0;
    } else if (currRating === 0) {
      starArray.push(<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 36.09 40.09" key={i}>
        <path d="M36.042,13.909c-0.123-0.377-0.456-0.646-0.85-0.688l-11.549-1.172L18.96,1.43c-0.16-0.36-0.519-0.596-0.915-0.596   s-0.755,0.234-0.915,0.598L12.446,12.05L0.899,13.221c-0.394,0.04-0.728,0.312-0.85,0.688c-0.123,0.377-0.011,0.791,0.285,1.055   l8.652,7.738L6.533,34.045c-0.083,0.387,0.069,0.787,0.39,1.02c0.175,0.127,0.381,0.191,0.588,0.191   c0.173,0,0.347-0.045,0.503-0.137l10.032-5.84l10.03,5.84c0.342,0.197,0.77,0.178,1.091-0.059c0.32-0.229,0.474-0.633,0.391-1.02   l-2.453-11.344l8.653-7.737C36.052,14.699,36.165,14.285,36.042,13.909z M25.336,21.598c-0.268,0.24-0.387,0.605-0.311,0.957   l2.097,9.695l-8.574-4.99c-0.311-0.182-0.695-0.182-1.006,0l-8.576,4.99l2.097-9.695c0.076-0.352-0.043-0.717-0.311-0.957   l-7.396-6.613l9.87-1.002c0.358-0.035,0.668-0.264,0.814-0.592l4.004-9.077l4.003,9.077c0.146,0.328,0.456,0.557,0.814,0.592   l9.87,1.002L25.336,21.598z"/>
      </svg>);
    } else {
      starArray.push(<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 28 28" version="1.1" key={i}>
        <g id="ic_fluent_star_28_filled" fill="#212121">
          <path d="M14.4373398,3.10348696 C14.6345524,3.20081719 14.7941799,3.36044472 14.8915102,3.55765732 L17.8153782,9.48206111 L24.353346,10.4320834 C24.8998908,10.511501 25.2785723,11.0189439 25.1991547,11.5654888 C25.1675302,11.7831258 25.065043,11.9842682 24.9075593,12.1377768 L20.1766414,16.749282 L21.2934597,23.2608319 C21.3868207,23.8051684 21.0212328,24.3221243 20.4768964,24.4154853 C20.2601388,24.4526621 20.0371707,24.4173475 19.8425102,24.3150084 L13.9947741,21.2406716 L8.14703796,24.3150084 C7.65819337,24.5720092 7.05356621,24.3840627 6.79656541,23.8952181 C6.69422634,23.7005576 6.65891166,23.4775895 6.69608851,23.2608319 L7.81290673,16.749282 L3.08198882,12.1377768 C2.68650524,11.7522756 2.67841294,11.1191623 3.06391415,10.7236788 C3.21742275,10.5661951 3.41856517,10.4637079 3.6362022,10.4320834 L10.1741699,9.48206111 L13.098038,3.55765732 C13.3424603,3.06240366 13.9420861,2.85906466 14.4373398,3.10348696 Z" id="🎨-Color"/>
        </g>
      </svg>);
      currRating = currRating - 1;
    }
  }

  return (
    <div>
      {starArray}
    </div>
  );
};

export default StarRating;