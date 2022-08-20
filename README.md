# tiny-crayon

Terminal string styling

```
npm i tiny-crayon
```

## Usage
```javascript
const crayon = require('tiny-crayon')

console.log(
  crayon.italic('hey'),
  crayon.underline('hey'),
  crayon.overline('hey'),
  crayon.inverse('hey'),
  crayon.strikethrough('hey'),
)

console.log(
  crayon.red(crayon.bold('hey')),
  crayon.red('hey'),
  crayon.redBright('hey'),
  crayon.bgRed('hey'),
  crayon.bgRedBright('hey'),
)

console.log(
  crayon.green(crayon.bold('hey')),
  crayon.green('hey'),
  crayon.greenBright('hey'),
  crayon.bgGreen('hey'),
  crayon.bgGreenBright('hey'),
)

console.log(
  crayon.blue(crayon.bold('hey')),
  crayon.blue('hey'),
  crayon.blueBright('hey'),
  crayon.bgBlue('hey'),
  crayon.bgBlueBright('hey'),
)
```

## License
MIT
