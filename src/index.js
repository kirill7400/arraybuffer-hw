import Magician from "./class/Magician";
import Demon from "./class/Demon";
import ArrayBufferConverter from './class/ArrayBufferConverter'

const magician = new Magician()
const demon = new Demon()

console.log('magician:', magician.attack)
console.log('demon:', demon.attack)

magician.stoned = true
magician.range = 2
console.log(magician.attack, magician.stoned)


magician.range = 2
magician.attack = 150
console.log(magician.attack, magician.stoned)

const converter = new ArrayBufferConverter

console.log(converter.load(converter.getBuffer()))


