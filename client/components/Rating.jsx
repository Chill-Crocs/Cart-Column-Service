import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const {
      rating,
    } = this.props;
    const {
      name, sales, stars,
    } = rating;
    return (
      <div>
        <div id="name">
          {name}
        </div>
        <div id="sales">
          {`${sales} Sales`}
        </div>
        <div id="rating">
          {stars}
        </div>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.element.isRequired,
};

export default Rating;
