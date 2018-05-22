import { login, logout} from '../../actions/auth';

test("Should correctly fire login action", () => {
  const action = login('Test');
  expect(action).toEqual({
    type: 'LOGIN',
    uid: 'Test'
  });
});

test("Should correctly fire logout action", () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});
