import React from 'react';
import PropTypes from 'prop-types';
import Shipping from './Shipping';

class ExtDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsClicked: false,
      descriptionClicked: false,
      shippingClicked: false,
    };
    this.collapseOnClick = this.collapseOnClick.bind(this);
    this.getCollapDetails = this.getCollapDetails.bind(this);
    this.getCollapDescrip = this.getCollapDescrip.bind(this);
    this.getCollapShipping = this.getCollapShipping.bind(this);
  }

  getCollapDetails() {
    const { detailsClicked } = this.state;
    if (detailsClicked) {
      return (
        <div className="detailsContent">
          Handmade Item
        </div>
      );
    }
    return <span />;
  }

  getCollapDescrip() {
    const { descriptionClicked } = this.state;
    if (descriptionClicked) {
      return (
        <div className="descriptionContent">
          A bunch of description.
        </div>
      );
    }
    return <span />;
  }

  getCollapShipping() {
    const { shippingClicked } = this.state;
    const { shipping, shopPolicy, distance, name } = this.props;
    if (shippingClicked) {
      return (
        <Shipping shipping={shipping} shopPolicy={shopPolicy} distance={distance} name={name} />
      );
    }
    return <span />;
  }

  collapseOnClick(e) {
    if (e.target.className === 'detailsCollapsible') {
      let { detailsClicked } = this.state;
      detailsClicked = !detailsClicked;
      this.setState({ detailsClicked });
    } else if (e.target.className === 'descriptionCollapsible') {
      let { descriptionClicked } = this.state;
      descriptionClicked = !descriptionClicked;
      this.setState({ descriptionClicked });
    } else {
      let { shippingClicked } = this.state;
      shippingClicked = !shippingClicked;
      this.setState({ shippingClicked });
    }
  }

  render() {
    const { extDetails } = this.props;
    const { sales, availability } = extDetails;
    function getFirstRandDescription() {
      if (!availability) {
        // if (Math.random() > 0.5) {
        return (
          {
            bold: 'Rare find',
            rest: 'there\'s only 1 of these in stock and 1 other person has this in their cart right now.',
          }
        );
        // }
      //   return (
      //     {
      //       bold: 'Almost gone',
      //       rest: 'there\'s only left',
      //     }
      //   );
      }
      return (
        {
          bold: 'Other people want this.',
          rest: 'Over 20 people have this in their carts right now.',
        }
      );
    }
    function getFirstDetail() {
      const randDescription = getFirstRandDescription();
      if (!availability) {
        return (
          <span className="inline-svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 40" className="temp" height="48" width="48" aria-hidden="true" focusable="false">
              <g data-animator-group="true" data-animator-type="1" fill="none"><path d="M16 14.7c0 0.4 0.1 0.9 0.4 1.2l5.2 6.9c0 0.9 0 1.5 0 2.4l-5.2 6.9c-0.3 0.3-0.4 0.8-0.4 1.2V38h16v-4.7c0-0.4-0.1-0.8-0.4-1.2l-5.2-6.9c0-0.9 0-1.5 0-2.4l5.2-6.9c0.3-0.4 0.4-0.8 0.4-1.2V10H16V14.7z" /></g>
              <g data-animator-group="true" data-animator-type="0"><path d="M18 12c0 0.1 0 2.2 0 2.3 0 0.2 0.1 0.4 0.2 0.6l5 6.7c0.4 0.5 1.2 0.5 1.6 0l5-6.7c0.1-0.2 0.2-0.4 0.2-0.6 0-0.1 0-2.2 0-2.3C26 12 22 12 18 12z" /></g>
              <path d="M30 36c0-0.1 0-0.2 0-0.3 0-0.2-0.1-0.4-0.2-0.6l-5-6.7c-0.4-0.5-1.2-0.5-1.6 0l-5 6.7c-0.1 0.2-0.2 0.4-0.2 0.6 0 0.1 0 0.2 0 0.3C22 36 26 36 30 36z" />
              <g data-animator-group="true" data-animator-type="0"><rect x="17.6" y="11.8" width="12.8" height="4.2" /></g>
              <g data-animator-group="true" data-animator-type="0"><g data-animator-group="true" data-animator-type="2"><path d="M30.4 36.1H17.6v-1.9c0-3.5 2.9-6.4 6.4-6.4h0c3.5 0 6.4 2.9 6.4 6.4V36.1z" /></g></g>
              <g data-animator-group="true" data-animator-type="1">
                <path d="M36 14.7V10c0.8-0.8 1.2-1.2 2-2V6h-2H12h-2v2c0.8 0.8 1.2 1.2 2 2v4.7c0 1.3 0.4 2.6 1.2 3.6l4.3 5.7 -4.3 5.7c-0.8 1-1.2 2.3-1.2 3.6V38c-0.8 0.8-1.2 1.2-2 2v2h2 24 2v-2c-0.8-0.8-1.2-1.2-2-2v-4.7c0-1.3-0.4-2.6-1.2-3.6L30.5 24l4.3-5.7C35.6 17.2 36 16 36 14.7zM32 14.7c0 0.4-0.1 0.9-0.4 1.2l-5.2 6.9c0 0.9 0 1.5 0 2.4l5.2 6.9c0.3 0.3 0.4 0.8 0.4 1.2V38H16v-4.7c0-0.4 0.1-0.8 0.4-1.2l5.2-6.9c0-0.9 0-1.5 0-2.4l-5.2-6.9c-0.3-0.4-0.4-0.8-0.4-1.2V10h16C32 10 32 14.7 32 14.7z" />
              </g>
            </svg>
            <span className="descriptor">
              <b>
                {randDescription.bold}
                <span> </span>
              </b>
              {randDescription.rest}
            </span>
          </span>
        );
      } if (sales > 200) {
        return (
          <span className="inline-svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 40" height="48" width="48" aria-hidden="true" focusable="false">
              <g data-animator-group="true" data-animator-type="2">
                <polygon points="43 8 41.9 6.1 40 5 41.9 3.9 43 2 44.1 3.9 46 5 44.1 6.1 " />
              </g>
              <g data-animator-group="true" data-animator-type="2">
                <polygon points="6 27 4.9 25.1 3 24 4.9 22.9 6 21 7.1 22.9 9 24 7.1 25.1 " />
              </g>
              <g data-animator-group="true" data-animator-type="2">
                <polygon points="43 41 41.9 39.1 40 38 41.9 36.9 43 35 44.1 36.9 46 38 44.1 39.1 " />
              </g>
              <g data-animator-group="true" data-animator-type="0">
                <g data-animator-group="true" data-animator-type="1">
                  <g data-animator-group="true" data-animator-type="2">
                    <polygon points="15.8 27 38.3 25 40 12.8 12.2 12.8 " />
                  </g>
                </g>
              </g>
              <polygon points="15.7 18.4 20.5 18.2 20.5 14 14.6 14 " />
              <polygon points="23.5 25.3 28.5 24.9 28.5 20.9 23.5 21.1 " />
              <polygon points="23.5 18.1 28.5 17.9 28.5 14 23.5 14 " />
              <polygon points="17.5 25.9 20.5 25.6 20.5 21.2 16.4 21.4 " />
              <polygon points="31.5 17.8 37.2 17.5 37.7 14 31.5 14 " />
              <polygon points="31.5 24.6 36.2 24.1 36.8 20.5 31.5 20.8 " />
              <g data-animator-group="true" data-animator-type="0">
                <circle cx="35" cy="41" r="3" />
              </g>
              <g data-animator-group="true" data-animator-type="0">
                <circle cx="15" cy="41" r="3" />
              </g>
              <g data-animator-group="true" data-animator-type="0">
                <g data-animator-group="true" data-animator-type="1">
                  <path d="M40 10H13.6l-0.6-2.5L11 6H4v4h5.4l0.6 2.5L13.9 28l-1.4 5.5 1.9 2.5H38v-4H17.1l0.5-2.1L38.2 28l1.8-1.7 2-14L40 10zM20.5 25.6l-3 0.3 -1.1-4.4 4.1-0.2V25.6zM20.5 18.2l-4.8 0.2L14.6 14h5.9V18.2zM28.5 24.9l-5 0.5v-4.2l5-0.2V24.9zM28.5 17.9l-5 0.2V14h5V17.9zM36.2 24.1l-4.7 0.4v-3.8l5.3-0.2L36.2 24.1zM37.2 17.5l-5.7 0.2V14h6.2L37.2 17.5z" />
                </g>
              </g>
            </svg>
            <span className="descriptor">
              <b>
                {randDescription.bold}
                <span> </span>
              </b>
              {randDescription.rest}
            </span>
          </span>
        );
      }
      return (
        <span />
      );
    }
    return (
      <div className="extDetails">
        <div className="extDetails-buttons">
          <div className="buyButton">
            <button type="button"> Buy it now </button>
          </div>
          <div className="cartButton">
            <button type="button"> Add to cart </button>
          </div>
        </div>
        <div>
          {getFirstDetail()}
        </div>
        <div className="details">
          <span className="inline-svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 40" height="48" width="48" aria-hidden="true" focusable="false">
              <g data-animator-group="true" data-animator-type="0">
                <circle cx="13" cy="38" r="4" />
              </g>
              <g data-animator-group="true" data-animator-type="0">
                <circle cx="35" cy="38" r="4" />
              </g>
              <g data-animator-group="true" data-animator-type="0">
                <circle cx="13" cy="38" r="4" />
              </g>
              <g data-animator-group="true" data-animator-type="0">
                <circle cx="35" cy="38" r="4" />
              </g>
              <g data-animator-group="true" data-animator-type="0">
                <g data-animator-group="true" data-animator-type="1">
                  <path d="M38.6 15c-0.6-0.3-1.1-0.6-1.7-1H28v14H4v7c0.4 0.4 0.6 0.6 1 1h2.4c0.8-2.3 3-4 5.6-4s4.8 1.7 5.6 4h10.7c0.8-2.3 3-4 5.6-4s4.8 1.7 5.6 4H43c0.4-0.4 0.6-0.6 1-1V24L38.6 15zM32 24v-6h4.9l3.6 6H32z" />
                  <path d="M28 10c-0.8-0.8-1.2-1.2-2-2H6c-0.8 0.8-1.2 1.2-2 2v18h24V10z" />
                </g>
              </g>
            </svg>
            <span className="descriptor">
              <b>Nice choice! </b>
              Enjoy free shipping to the US when you spend $35+ at this shop.
            </span>
          </span>
          <button type="button" className="detailsCollapsible" onClick={this.collapseOnClick}>
            Details
          </button>
          {this.getCollapDetails()}
          <button type="button" className="descriptionCollapsible" onClick={this.collapseOnClick}>
            Description
          </button>
          {this.getCollapDescrip()}
          <button type="button" className="shippingCollapsible" onClick={this.collapseOnClick}>
            Shipping and Return Policies
          </button>
          {this.getCollapShipping()}
        </div>
      </div>
    );
  }
}

export default ExtDetails;

ExtDetails.propTypes = {
  extDetails: PropTypes.shape({
    sales: PropTypes.number,
    availability: PropTypes.bool,
  }),
  shipping: PropTypes.shape({
    origin: PropTypes.shape({
      latitude: PropTypes.string,
      longitude: PropTypes.string,
    }),
    exchanges: PropTypes.bool,
  }),
  shopPolicy: PropTypes.shape({
    lastUpdated: PropTypes.string,
    returns: PropTypes.bool,
    noReturnTypes: PropTypes.arrayOf(PropTypes.string),
  }),
  distance: PropTypes.number,
};

ExtDetails.defaultProps = {
  extDetails: {
    sales: -1,
    availability: false,
  },
  shipping: {
    origin: {
      latitude: '47.839958190918',
      longitude: '-122.206146240234',
    },
    exchanges: false,
  },
  shopPolicy: {
    lastUpdated: '',
    returns: false,
    noReturnTypes: [],
  },
  distance: -1,
};
