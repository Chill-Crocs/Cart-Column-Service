/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import React from 'react';
import PropTypes from 'prop-types';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { info } = this.props;
    const { tags, price, availability } = info;
    let i = 0;
    let separator;
    const randNum = Math.random();
    if (randNum > 0.49) {
      separator = '|';
    } else {
      separator = '-';
    }
    function mapFunc(value) {
      i += 1;
      if (i === 1 && tags.length > 1) {
        return (
          <h1 key={i} className="tags">
            {value}
            <span> </span>
            {separator}
          </h1>
        );
      }
      if (i === tags.length) {
        return (
          <p key={i} className="tags">
            <span> </span>
            {value}
          </p>
        );
      }
      return (
        <p key={i} className="tags">
          <span> </span>
          {value}
          <span> </span>
          {separator}
        </p>
      );
    }
    const viewTags = tags.map(mapFunc);
    const priceView = `$${(price / 100).toFixed(2)}`;
    return (
      <div>
        <div>
          {viewTags}
        </div>
        <div>
          {priceView}
        </div>
        <div>
          {availability}
        </div>
      </div>
    );
  }
}

Info.propTypes = {
  info: PropTypes.shape({
    tags: PropTypes.arrayOf(PropTypes.string.isRequired),
    price: PropTypes.number.isRequired,
    availability: PropTypes.bool.isRequired,
  }),
};

Info.defaultProps = {
  info: {
    tags: [],
    price: -1,
    availability: false,
  },
};

export default Info;
