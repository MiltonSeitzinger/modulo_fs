/**
* Se importa el módulo fs y http
**/
const fs = require('fs')
const http = require('http')
/**
* Lectura de archivos sincrónicamente y asincrónicamente
* asincrónicamente: fs.readFile().
* sincrónicamente: fs.readFileSync()
**/
fs.readFile('readFile.txt', 'utf8',(err, data) => {
  if (err) console.log(err)
  console.log(data)
})

const datos = fs.readFileSync('readFileSync.txt', 'utf8')
console.log(datos)

/**
* Leer archivos a través de Stream.
* Se lo utiliza cuando leemos archivos grandes, ya que los metodos anteriores
* carga todo en memoria, podría ser un problema.
**/
const server = http.createServer((req, res) => {
  const stream = fs.createReadStream('stream.txt')
  stream.pipe(res)
})
server.listen(3000, () => {
  console.log('Server corriendo el puerto 3000')
})

/**
* Escribir archivos en forma sincrónica y asincrónica.
* asincrónica: writeFile
* sincrónica: writeFileSync
**/
fs.writeFile('writeFile.txt', "Escribiendo un archivo de texto de manera asincrónica con nodeJs", (err) =>{
  if (err) console.log(err)
  console.log('Archivo creado satisfactoriamente')
})

try {
  const file = fs.writeFileSync('writeFileSync.txt', "Escribiendo un archivo de texto de manera sincrónica con nodeJs")
} catch(err) {
  console.error(err)
}
/**
* Comprobar el estdo de un archivo
* fs.stat() de manera asincrónica.
* fs.statSync() de manera sincrónica
* isFile() -> Si es un archivo.
* isDirectory() -> si es un directorio.
* isSymbolicLink() -> si es un enlace simbólico.
* size -> el tamaño del archivo.
**/
fs.stat('readFile.txt', (err, stats) =>{
  if (err) consoe.log(err)
  console.log(stats.isFile())
  console.log(stats.isDirectory())
  console.log(stats.isSymbolicLink())
  console.log(stats.size)
})

const status = fs.statSync('readFileSync.txt')
console.log(status.isFile())
console.log(status.isDirectory())
console.log(status.isSymbolicLink())
console.log(status.size)
/**
* Eliminar un archivo o un enlace simbólico
* Para archivos: fs.unlink()
* Para directorios: fs.rmdir()
* Para operaciones sincrónica: fs.unlinkSinc()
**/
fs.unlink ('eliminar.txt', (err) => {
  if (err) console.log(err)
  console.log ('se eliminó eliminar.txt')
})

fs.unlinkSync ('eliminarSync.txt', (err) => {
  if (err) console.log(err)
  console.log ('se eliminó eliminarSync.txt')
})
/**
* Renombrar un archivo.
* asincrónicamente: fs.rename()
* sincrónica: fs.renameSync()
**/
fs.rename('rename.txt', 'nuevoNombre.txt', (err) => {
  if (err) console.log(err)
  console.log('Nuevo nombre')
})

fs.renameSync('nuevoNombre.txt', 'nuevoNombreSync.txt', (err) =>{
  if (err) console.log(err)
  console.log('Nuevo nombre')
})
