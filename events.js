const deepstream = require('deepstream.io-client-js')

const clientA = deepstream('localhost:6020').login()
const clientB = deepstream('localhost:6020').login()



clientB.event.emit('my_event')

setTimeout(function () {
  clientA.event.subscribe('my_event', () => {
    console.log('clientA subscribed')
  })
}, 30)
setTimeout(() => {
  clientB.event.subscribe('my_event', () => {
    console.log('clientB subscribed')
  })
}, 50)

setTimeout(() => {
  clientB.event.emit('my_event')
}, 80)

setTimeout(() => {
  clientA.event.unsubscribe('my_event')
}, 100)

setTimeout(() => {
  clientB.event.emit('my_event')
}, 120)

setTimeout(() => {
  clientB.event.unsubscribe('my_event')
}, 140)

setTimeout(() => {
  clientB.event.emit('my_event')
}, 160)



setTimeout(() => {
  clientA.close()
  clientB.close()
}, 200)
