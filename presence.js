const deepstream = require('deepstream.io-client-js')

const clientA = deepstream('localhost:6020').login()
const clientB = deepstream('localhost:6020')
const clientC = deepstream('localhost:6020')
const clientD = deepstream('localhost:6020')
const clientE = deepstream('localhost:6020')

setTimeout(function () {
  clientA.presence.subscribe((username, isLoggedIn) => {
    console.log(username, isLoggedIn)
  })
}, 10)

setTimeout(function () {
  clientB.login({username: 'Rick'})
}, 40)

setTimeout(function () {
  clientC.login({username: 'Summer', password: 'pwd'})
}, 70)

setTimeout(function () {
  clientD.login()
}, 100)

setTimeout(function () {
  clientA.presence.getAll((clients) => {
    console.log('connected clients:', clients)
  })
}, 130)

// docs mention a callback being not-optional.  i havn't included one here.  should i be triggering an error?
setTimeout(function () {
  clientA.presence.unsubscribe()
}, 150)

setTimeout(function () {
  clientE.login({username: 'Beth', password: 'pwd'})
}, 170)



setTimeout(() => {
  clientA.close()
  clientB.close()
  clientC.close()
  clientD.close()
  clientE.close()
}, 200)
