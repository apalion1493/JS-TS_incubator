import {users, UsersObj} from './08_01';

beforeEach(() => {

})

test('should select corresponding user from obj', () => {
  expect(UsersObj[0]).toBe('Name1');
  expect(UsersObj[1]).toBe('Name2');
  expect(UsersObj[2]).toBe('Name3');
});