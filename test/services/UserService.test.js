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
    expect(userInfoInList[3]).toBe("No Bio")
  });
  test('3. Update username', ()=>{
    const user = UserService.create(1, "marcocar", "Marco")
    UserService.updateUserUsername(user, "marcocaror")
    expect(user.username).toBe("marcocaror")
  });
  test('4. Given a list of users give me the list of usernames', ()=>{
    const user1 = UserService.create(1, "marcocar1", "Marco")
    const user2 = UserService.create(1, "marcocar2", "Marco")
    const user3 = UserService.create(1, "marcocar3", "Marco")
    const usernames = UserService.getAllUsernames([user1, user2, user3])
    expect(usernames).toContain("marcocar1")
    expect(usernames).toContain("marcocar2")
    expect(usernames).toContain("marcocar3")
  });
})
