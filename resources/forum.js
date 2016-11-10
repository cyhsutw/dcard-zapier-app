const Constant = require('../constants');

// get a list of forums
const listForums = (z) => {
  return z.request(`${Constant.ApiRoot}/forums`)
          .then(response => response.json);
};

module.exports = {
  key: 'forum',
  noun: 'Forum',
  list: {
    display: {
      label: 'Get a list for forums.',
      description: 'Lists the forums.',
      hidden: true
    },
    operation: {
      perform: listForums
    }
  }
};
