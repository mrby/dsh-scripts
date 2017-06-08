const deepstream = require('deepstream.io-client-js')

const clientA = deepstream('localhost:6020').login()
const myRecord = clientA.record.getRecord('record_name')

setTimeout(() => {
  console.log(
      '4 usages at end of log:',
      clientA.record.getRecord('record_name').usages,
      myRecord.subscribe('grandchild', printing),
      clientA.record.getRecord('record_name').name,
      clientA.record.getRecord('record_name').usages)
}, 30)

setTimeout(() => {
  console.log('setting record data…')
  myRecord.set('grandchild', 'Morty')
}, 50)

setTimeout(() => {
  console.log(
      'getting record:',
      myRecord.get())
}, 60)

setTimeout(() => {
  console.log('setting record data…')
  myRecord.set('grandchild', 'Summer')
}, 70)

setTimeout(() => {
  console.log(
      'getting record:',
      myRecord.get())
}, 100)



setTimeout(() => {
  clientA.close()
}, 200)



function printing() {
  console.log(myRecord.name)
}
