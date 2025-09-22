/*
programa que lee de terminal parametros el cual lo evalua que sean correctos y crea la tabla
se puede pedir ayuda
    node index --help
se ejecuta
    node index -b=7 -l=true
*/
const {crearArchivo}=require("./operaciones/multiplicar.js");
const {argv} = require("./MisModulos/miYargs.js");

console.clear();
console.log(argv);

 crearArchivo(argv.base,argv.hasta,argv.l)
.then(nombreArchivo=>console.log((nombreArchivo+' creado').rainbow))
.catch(error=>console.log(error));
