const EventEmitter = require("events")

class Emiter extends EventEmitter {} 

const emiter = new Emiter()
const eventName = 'user:click'

emiter.on(eventName, (event) => {
    console.log('a user clicked in', event)
})

emiter.emit(eventName, 'cancel button')

let count = 0
setInterval(() => {
    emiter.emit(eventName, `ok button ${count} times`)
    count++
}, 1000)
