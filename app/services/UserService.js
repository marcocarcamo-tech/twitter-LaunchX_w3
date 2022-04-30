const User = require('../models/User');

class UserService {
  static create(id, username, name){
    return new User(id, username, name, "No Bio")
  }
  static getInfo(user){
    return Object.values(user)
  }
}

module.exports = UserService