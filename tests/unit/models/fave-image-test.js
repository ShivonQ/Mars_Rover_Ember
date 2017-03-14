import { moduleForModel, test } from 'ember-qunit';

moduleForModel('fave-image', 'Unit | Model | fave image', {
  // Specify the other units that are required for this test.
  needs: ['model:faved-by', 'model:user']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
