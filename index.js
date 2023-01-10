module.exports = new Crayon()
module.exports.Crayon = Crayon

function Crayon (stream = process.stdout) {
  const modifiers1 = { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24] }
  const modifiers2 = { overline: [53, 55], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }
  const colors = { index: 30, list: ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'], close: 39 }
  const colorsBright = { index: 90, list: ['blackBright', 'redBright', 'greenBright', 'yellowBright', 'blueBright', 'magentaBright', 'cyanBright', 'whiteBright'], close: 39 }
  const bgColor = { index: 40, list: ['bgBlack', 'bgRed', 'bgGreen', 'bgYellow', 'bgBlue', 'bgMagenta', 'bgCyan', 'bgWhite'], close: 49 }
  const bgColorBright = { index: 100, list: ['bgBlackBright', 'bgRedBright', 'bgGreenBright', 'bgYellowBright', 'bgBlueBright', 'bgMagentaBright', 'bgCyanBright', 'bgWhiteBright'], close: 49 }

  for (const info of [modifiers1, modifiers2, colors, colorsBright, bgColor, bgColorBright]) {
    generator(this, info, typeof stream === 'object' && stream ? stream.isTTY : false)
  }

  this.gray = this.grey = this.blackBright
  this.bgGray = this.bgGrey = this.bgBlackBright
}

function paint (code) {
  return '\x1B[' + code + 'm'
}

function decorate (isEnabled, [open, close], ...args) {
  if (!isEnabled) {
    return args.join(' ')
  }
  return paint(open) + args.join(' ') + paint(close)
}

function generator (self, info, isEnabled) {
  const assign = (name, indexes) => { self[name] = decorate.bind(self, isEnabled, indexes) }

  if (info.index === undefined) {
    for (const name in info) {
      assign(name, info[name])
    }
    return
  }

  for (let i = 0; i < info.list.length; i++) {
    assign(info.list[i], [info.index + i, info.close])
  }
}
