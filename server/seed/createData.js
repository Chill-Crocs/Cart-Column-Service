const faker = require('faker');

function createData(id) {
  function getTags() {
    const arr = [];
    for (let i = 0; i < Math.round(Math.random() * 12 + 1); i += 1) {
      arr.push(faker.commerce.productAdjective());
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
    for (let i = 0; i < Math.round(Math.random() * 4 + 1); i += 1) {
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

module.exports = createData;
