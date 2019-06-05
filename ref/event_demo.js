const EventEmitter = require('events');

const uuid = require('uuid');

class ConfirmRegisteration extends EventEmitter {
    confirm(message) {
        this.emit('signup', {id: uuid.v4(), message})
    }
}

module.exports = ConfirmRegisteration;