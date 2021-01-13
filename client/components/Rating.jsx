import React from 'react';

class Rating extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <div id="name">
          {this.props.rating.name}
        </div>
        <div id="sales">
          {this.props.rating.sales} Sales
        </div>
        <div id="rating">
          {this.props.rating.stars}
        </div>
      </div>
    )
  }
}

export default Rating;