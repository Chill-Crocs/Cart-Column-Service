import React from 'react';
import axios from 'axios';

import Rating from './Rating.jsx';
import Info from './Info.jsx';
import Selector from './Selector.jsx';
import ExtDetails from './ExtDetails.jsx';
import Shipping from './Shipping.jsx';
import Seller from './Seller.jsx';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      render: false,
      rating: {
        name: '',
        sales: -1,
        stars: -1
      },
      info: {
        tags: [],
        price: -1,
        availability: null
      },
      selectors: [],
      extDetails: {
        details: '',
        description: ''
      },
      shipping: {
        arrival: '',
        ships: '',
        delivered: ''
      },
      seller: {
        name: '',
        company: '',
        imageURL: ''
      }
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    axios.get('https://api.github.com/gists/372c095e21a5b94bff5e6767a2e40299')
      .then(result => {
        const {rating, info, selectors, extDetails, shipping, seller} = JSON.parse(result.data.files['example-data.json'].content);
        this.setState({render: true, rating, info, selectors, extDetails, shipping, seller})
      })
  }

  render() {
    if (this.state.render) {
      return (
        <div>
          <Rating rating={this.state.rating}/>
          <Info info={this.state.info}/>
          <Selector selectors={this.state.selectors}/>
          <ExtDetails extDetails={this.state.extDetails}/>
          <Shipping shipping={this.state.shipping}/>
          <Seller seller={this.state.seller}/>
        </div>
      )
    } else {
      return (
        <button onClick={this.clickHandler}>GET Item Cart</button>
      )
    }
  }
}

export default App;