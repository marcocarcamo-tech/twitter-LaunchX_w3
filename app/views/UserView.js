const UserService = require('../../app/services/UserService');

class UserView {
    
    static createUser (payload){
        if (payload === null){
            return {error: "payload no existe"}
        }else if (typeof payload.username != 'string' && typeof payload.name != 'string'  && typeof payload.id != 'int'){ 
            return   {error: "necesitan tener un valor válido"}
        } else {
            return UserService.create(payload.id, payload.username, payload.name)
        }         
    }
}

module.exports = UserView;