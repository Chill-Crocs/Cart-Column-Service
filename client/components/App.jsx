import React from 'react';
import axios from 'axios';

import Rating from './Rating';
import Info from './Info';
import Selector from './Selector';
import ExtDetails from './ExtDetails';
import Shipping from './Shipping';
import ShopPolicy from './ShopPolicy';
import Seller from './Seller';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: {
        name: '',
        sales: -1,
        stars: -1,
      },
      info: {
        tags: [],
        price: -1,
        availability: false,
      },
      selectors: [],
      extDetails: {
        details: [],
        description: '',
      },
      shipping: {
        origin: -1,
        exchanges: false,
      },
      shopPolicy: {
        lastUpdated: '',
        returns: false,
        noReturnTypes: [],
      },
      seller: {
        name: '',
        role: '',
        imageURL: '',
      },
    };
  }

  componentDidMount() {
    const randNum = Math.round(Math.random() * 100);
    axios.get(`/api/item/${randNum}`)
      .then((result) => {
        const {
          rating, info, selectors, extDetails, shipping, shopPolicy, seller,
        } = result.data;
        this.setState({
          rating, info, selectors, extDetails, shipping, shopPolicy, seller,
        });
      });
  }

  render() {
    const {
      rating, info, selectors, extDetails, shipping, shopPolicy, seller,
    } = this.state;
    return (
      <div>
        <Rating rating={rating} />
        <Info info={info} />
        <Selector selectors={selectors} />
        <ExtDetails extDetails={extDetails} />
        <Shipping shipping={shipping} />
        <ShopPolicy shopPolicy={shopPolicy} />
        <Seller seller={seller} />
      </div>
    );
  }
}

export default App;