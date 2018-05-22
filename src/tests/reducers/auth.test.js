import authReducer from '../../reducers/auth';

test("Should correctly set uid on login", () => {
  const action = {
    type: 'LOGIN',
    uid: 'asdf'
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test("Should correctly set uid on logout", () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({uid: 'test123'}, action);
  expect(state).toEqual({})
});