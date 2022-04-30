const UserService = require(../../app/services/UserService);

describe("Test for UserService", ()=>{
  test('1. Create a new user using the UserService', ()=>{
    const user = new UserService.create(1, "marcocar", "Marco")

    expect(user.username).toBe("marcocar")
    expect(user.name).toBe("Marco")
    expect(user.id).toBe(1)
    expect(user.bio).not.toBeUndefined()
  });
