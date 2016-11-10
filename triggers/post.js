const Constant = require('../constants');

const listPosts = (z, bundle) => {
  const forumSubPath = bundle.inputData.forumAlias ? `/forums/${bundle.inputData.forumAlias}` : ''

  return z.request(`${Constant.ApiRoot}${forumSubPath}/posts`)
          .then((response) => {
              return response.json.map((post) => {
                post.htmlLink = `${Constant.WebRoot}/f/${post.forumAlias}/p/${post.id}`;
                return post;
              });
            }
          );
};

module.exports = {
  key: 'post',
  noun: 'Post',
  display: {
    label: 'New Posts',
    description: 'Trigger when a new post is published.'
  },
  operation: {
    inputFields: [
      {
        key: 'forumAlias',
        label: 'Forum',
        required: false,
        dynamic: 'forum.alias.name'
      }
    ],
    perform: listPosts
  }
};
