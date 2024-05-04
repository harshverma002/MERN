const b = new Buffer.from('ABC')
console.log(b.toString())
b.write('Other')
console.log(b.toString())