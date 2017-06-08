const deepstream = require('deepstream.io-client-js')

const clientA = deepstream('localhost:6020').login()
const clientB = deepstream('localhost:6020').login()
const myRecordA = clientA.record.getRecord('record_name')
const myRecordB = clientB.record.getRecord('record_name')

setTimeout(() => {
  console.log(
      '4 usages at end of log:',
      clientA.record.getRecord('record_name').usages,
      myRecordA.subscribe('grandchild', printingA),
      myRecordB.subscribe('grandchild', printingB),
      clientA.record.getRecord('record_name').name,
      clientA.record.getRecord('record_name').usages)
}, 30)

setTimeout(() => {
  console.log('setting record data…')
  myRecordA.set('grandchild', 'Morty')
  myRecordB.set('grandchild', 'Morty')
}, 50)

setTimeout(() => {
  console.log(
      'getting record path:',
      myRecordA.get('grandchild'))
}, 60)

setTimeout(() => {
  console.log('discarding A…')
  myRecordB.discard()
}, 70)

setTimeout(() => {
  console.log('setting record data…')
  myRecordA.set('grandchild', 'Summer')
}, 90)

setTimeout(() => {
  console.log(
      'getting all record data:',
      myRecordA.get())
}, 170)



setTimeout(() => {
  clientA.close()
  clientB.close()
}, 200)



function printingA() {
  console.log('A:', myRecordA.name, myRecordA.get('grandchild'))
}
function printingB() {
  console.log('B:', myRecordB.name, myRecordB.get('grandchild'))
}
