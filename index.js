const undefinedVal = undefined
console.log("undefinedVal: ", !!undefinedVal)

const nullVal = null
console.log("nullVal", !!nullVal)

const emptyObjectVal = {}
console.log("emptyObjectVal: ", !!emptyObjectVal)


const array1 = [
  {val: false},
  {val: true},
  {val: true},
  {val: true},
  {val: true},
  {val: true},
  {val: true},
  {val: true},
];

const isTrue = array1.every(i => i.val)

console.log('# isTrue: ', isTrue)
