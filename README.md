# tiny-crayon

Terminal string styling

```
npm i tiny-crayon
```

![image](https://user-images.githubusercontent.com/12686176/185734606-a136f9b6-846c-4b7b-9f06-2d0be63b4123.png)

## Usage
```javascript
const crayon = require('tiny-crayon')

console.log(
  crayon.italic('hey'),
  crayon.underline('hey'),
  crayon.overline('hey'),
  crayon.inverse('hey'),
  crayon.strikethrough('hey')
)

console.log(
  crayon.red(crayon.bold('hey')),
  crayon.red('hey'),
  crayon.redBright('hey'),
  crayon.bgRed('hey'),
  crayon.bgRedBright('hey')
)

console.log(
  crayon.green(crayon.bold('hey')),
  crayon.green('hey'),
  crayon.greenBright('hey'),
  crayon.bgGreen('hey'),
  crayon.bgGreenBright('hey')
)

console.log(
  crayon.blue(crayon.bold('hey')),
  crayon.blue('hey'),
  crayon.blueBright('hey'),
  crayon.bgBlue('hey'),
  crayon.bgBlueBright('hey')
)

console.log(Object.keys(crayon)) // Print all methods
```

## Custom stream
It's only used to check if colors are available on that stream, that's it.\
By default it checks on `process.stdout` which is enough.

```javascript
const { Crayon } = require('tiny-crayon')
const crayon = new Crayon(process.stderr)
console.error(crayon.green('hey'))
```

## License
MIT
