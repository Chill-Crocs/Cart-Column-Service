module.exports = {
  // setupFilesAfterEnv: [
  //   ['jest-enzyme'],
  // ],
  // testEnvironment: [
  //   ['enzyme'],
  //   ['jsdom'],
  //   ['node'],
  // ],
  testEnvironment: 'node',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
  // preset: [
  //   ['jest-puppeteer'],
  //   ['@shelf/jest-mongodb'],
  // ],
  preset: '@shelf/jest-mongodb',
};

// "jest": {
//   "setupFilesAfterEnv": [
//     "jest-enzyme"
//   ],
//   "testEnvironment": [
//     ["enzyme"],
//     ["jsdom"]
//   ],
//   "testEnvironmentOptions": {
//     "enzymeAdapter": "react16"
//   },
//   "timers": "fake",
//   "preset": [
//     ["jest-puppeteer"],
//     ["@shelf/jest-mongodb"]
//   ]
// },
