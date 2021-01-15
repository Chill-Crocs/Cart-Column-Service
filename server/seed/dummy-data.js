const faker = require('faker');

const Cart = require('../../database/Cart');

function createData(id) {
  function getTags() {
    const arr = [];
    for (let i = 0; i < Math.round(Math.random * 12); i += 1) {
      arr.push(faker.commerce.productAdjective);
    }
    return arr;
  }
  function getRandBool() {
    const rand = Math.random();
    if (rand < 0.5) {
      return true;
    }
    return false;
  }
  function getOptions() {
    const arr = [];
    for (let i = 0; i < Math.round(Math.random() * 10); i += 1) {
      arr.push(faker.commerce.color());
    }
    return arr;
  }
  function getSelectors() {
    const arr = [];
    for (let i = 0; i < 5; i += 1) {
      arr.push({ name: faker.commerce.productMaterial(), options: getOptions() });
    }
    return arr;
  }
  return (
    {
      _id: id,
      rating: {
        name: faker.company.companyName(),
        sales: Math.round(Math.random() * 1000),
        stars: Math.round(Math.random() * 50) / 10,
      },
      info: {
        tags: getTags(),
        price: faker.commerce.price(),
        availability: getRandBool(),
      },
      selectors: getSelectors(),
      extDetails: {
        details: [
          {
            iconUrl: 'Hand',
            description: faker.commerce.productAdjective(),
          },
          {
            iconUrl: 'Stars',
            description: `Materials:  + ${faker.commerce.productMaterial()}`,
          },
        ],
        description: faker.commerce.productDescription(),
      },
      shipping: {
        origin: faker.address.zipCode(),
        exchanges: getRandBool(),
      },
      shopPolicy: {
        lastUpdated: faker.date.past(),
        returns: getRandBool(),
        noReturnTypes: ['Custom or personalized orders', 'Items on sale'],
      },
      seller: {
        name: faker.fake('{{name.firstName}} {{name.lastName}}'),
        role: faker.name.jobTitle(),
        imageURL: faker.image.imageUrl(),
      },
    }
  );
}

const data = {
  _id: 0,
  rating: {
    name: 'AjsValueDepot',
    sales: 135,
    stars: 4.5,
  },
  info: {
    tags: ['Buddha', 'Shoe Charms', 'Shoe Decor', 'Crok Charms', 'Christmas Gifts', 'Birthday Gifts', 'Shoe Plugs', 'Clog Shoe', 'Charms', 'Garden Charms', 'Plants'],
    price: 3.99,
    availability: true,
  },
  selectors: [
    {
      name: 'Style',
      options: ['Buddha', 'Plant Lady'],
    },
    {
      name: 'Quantity',
      options: [1, 100],
    },
  ],
  extDetails: {
    details: [
      {
        iconUrl: 'Hand',
        description: 'Handmade Item',
      },
      {
        iconUrl: 'Stars',
        description: 'Materials: Pvc',
      },
    ],
    description: 'Legal Disclaimer: My items are unbranded and unlicensed products. I do not claim ownership to any character, brand, or person used. Copyrights and/or trademarks used belong to their respective owners. These are inspired designs.',
  },
  shipping: {
    origin: 98038,
    exchanges: true,
  },
  shopPolicy: {
    lastUpdated: '11/5/2020',
    returns: false,
    noReturnTypes: ['Custom or personalized orders', 'Items on sale'],
  },
  seller: {
    name: 'Ameka Jackson',
    role: 'Owner',
    imageURL: 'AjsImage',
  },
};

Cart.CartModel.create(data)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

for (let i = 1; i < 100; i += 1) {
  Cart.CartModel.create(createData(i));
}
