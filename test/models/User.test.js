const User = require('../../app/models/user')

describe("Unit test for User class", ()=>{
  test('Create an User object', ()=>{
    const user = new User(1, "marcocar", "Marco", "Bio", "dataCreated", "lastUpdated")

    expect(user.id).toBe(1)
    expect(user.username).toBe("marcocar")
    expect(user.name).toBe("Marco")
    expect(user.bio).toBe("Bio")
    expect(user.dataCreated).toBe("dataCreated")
    expect(user.lastUpdated).toBe("lastUpdated")
  });
})
