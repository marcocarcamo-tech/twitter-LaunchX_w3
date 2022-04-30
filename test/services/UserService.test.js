const UserService = require('../../app/services/UserService');

describe("Test for UserService", ()=>{
  test('1. Create a new user using the UserService', ()=>{
    const user = UserService.create(1, "marcocar", "Marco")

    expect(user.username).toBe("marcocar")
    expect(user.name).toBe("Marco")
    expect(user.id).toBe(1)
    expect(user.bio).not.toBeUndefined()
  });
   test('2. Get all user data in a list', ()=>{
    const user = UserService.create(1, "marcocar", "Marco")
    const userInfoInList = UserService.getInfo(user)
    expect(userInfoInList[0]).toBe(1)
    expect(userInfoInList[1]).toBe("marcocar")
    expect(userInfoInList[2]).toBe("Marco")
    expect(userInfoInList[3]).not.toBeUndefined("No Bio")
  });
})
