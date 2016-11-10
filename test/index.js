require('should');

const zapier = require('zapier-platform-core');

// Use this to make test calls into your app:
const appTester = zapier.createAppTester(require('../index'));

describe('Dcard app', () => {
  describe('Subscription trigger', () => {
    const triggerPointer = 'triggers.post';

    describe('without forum specified', () => {
      it('should get the latest post', (done) => {
        const bundle = {};
        appTester(triggerPointer, bundle)
          .then((results) => {
            results.length.should.above(1);
            done();
          })
          .catch(done);
      });
    });

    describe('with forum specified', () => {
      const targetForumAlias = 'funny';
      it('should get the latest post', (done) => {
        const bundle = {
          inputData: {
            forumAlias: targetForumAlias
          }
        };
        appTester(triggerPointer, bundle)
          .then((results) => {
            results.length.should.above(1);
            results[0].forumAlias.should.eql(targetForumAlias);
            done();
          })
          .catch(done);
      });
    });
  });
});
