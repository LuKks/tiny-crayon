const test = require('brittle')
const crayon = require('./')
const { Crayon } = crayon

test('basic', function (t) {
  t.is(crayon.bold('hey'), '\x1B[1mhey\x1B[22m')
  t.is(crayon.black('hey'), '\x1B[30mhey\x1B[39m')
  t.is(crayon.blackBright('hey'), '\x1B[90mhey\x1B[39m')
  t.is(crayon.bgBlack('hey'), '\x1B[40mhey\x1B[49m')
  t.is(crayon.bgBlackBright('hey'), '\x1B[100mhey\x1B[49m')
})

test('new instance', function (t) {
  const crayon2 = new Crayon(process.stderr)
  t.is(crayon2.black('hey'), '\x1B[30mhey\x1B[39m')
})

test('no tty', function (t) {
  const crayon3 = new Crayon({ isTTY: false })
  t.is(crayon3.black('hey'), 'hey')
})
