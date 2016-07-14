const colorCodes = {
  o: 95,   // orange/brown
  r: 9,    // red
  y: 224,  // yellow/peach
  x: 0,    // black
  b: 33,   // blue
  Y: 11,   // yello/bright
  '.': ''  // none
}

const marioStr = `
.....rrrrr..yyy.
....rrrrrrrrryy.
....oooyyxy.rrr.
...oyoyyyxyyyrr.
...oyooyyyoyyyr.
...ooyyyyoooor..
.....yyyyyyyrr..
..rrrrbrrrbrr..o
yyrrrrrbrrrb..oo
yyyrrrrbbbbYbboo
.y..brbbYbbbbboo
..ooobbbbbbbbboo
.ooobbbbbb......
.oo.............
`.trim()

// split each line into an array
const marioArr = marioStr.split('\n')

for (let row of marioArr) {
  // a "block" is a string of consecutive colors
  const blocks = row.match(/(([a-zA-Z.])\2*)/g)
  // determine the color and length of each block and convert it to ANSI
  const output = blocks.
  map(block => {
    return `\x1b[48;5;${colorCodes[block[0]]}m${' '.repeat(block.length * 2)}\x1b[0m`
  }).join('')
  console.log(output)
}
