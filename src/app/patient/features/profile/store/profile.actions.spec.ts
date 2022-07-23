import * as fromProfileActions from './profile.actions';

describe('profileProfileActionss', () => {
  it('should return an action', () => {
    expect(fromProfileActions.profileProfileActionss().type).toBe('[ProfileActions] Profile ProfileActionss');
  });
});
