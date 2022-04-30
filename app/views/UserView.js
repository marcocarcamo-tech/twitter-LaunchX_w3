const UserService = require('../../app/services/UserService');

class UserView {
    
    static createUser (payload){
        if (payload === null){
            return {error: "payload no existe"}
        } else {
            return UserService.create(payload.id, payload.username, payload.name)
        }         
    }
}

module.exports = UserView;