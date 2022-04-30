const User = require('../../app/models/user')

describe("Unit test for User class", ()=>{
  test('Create an User object', ()=>{
    const user = new User(1, "marcocar", "Marco", "Bio")

    expect(user.id).toBe(1)
    expect(user.username).toBe("marcocar")
    expect(user.name).toBe("Marco")
    expect(user.bio).toBe("Bio")
    expect(user.dateCreated).not.toBeUndefined()
    expect(user.lastUpdated).not.toBeUndefined()
  });
  test('Add getters', ()=>{
    const user = new User(1, "marcocar", "Marco", "Bio")
    expect(user.getUsername).toBe("marcocar")
    expect(user.getBio).toBe("Bio")
    expect(user.getDateCreated).not.toBeUndefined()
    expect(user.getLastUpdated).not.toBeUndefined()
  });
})
