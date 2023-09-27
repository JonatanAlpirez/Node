/* Archivos .mjs  import Es modules No requiere función async*/
import { readFile } from 'node:fs/promises'

console.log('Leyendo el primer archivo...')
try {
    const text = await readFile('./archivo.txt', 'utf-8')
    console.log('primer texto:', text)
}
catch (err) {
    console.error(err.message);
}

console.log('--> Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
try {

    const secondText = await readFile('./archivo2.txt', 'utf-8')
    console.log('segundo texto:', secondText)
}
catch (err) {
    console.error(err.message);
}

