const argv = require("yargs")
                    .options('b',{
                        alias: 'base',
                        type:'number',
                        demandOption: true,
                        description: 'Es la base de la tabla de multiplilcar'
                    })
                    .option('l',{
                        alias: 'listar',
                        type:"boolean",
                        default: false,
                        description: 'Muestra la tabla por pantalla'
                    })
                    .option('h',{
                        alias: 'hasta',
                        type:"numeric",
                        default: 10,
                        description: '"Hasta" que numero multiplica'
                    })
                    .check((argv,option)=>{
                        if(isNaN(argv.b)) {
                            throw 'la base tiene que ser un numero'
                        }
                        if(isNaN(argv.h)){
                            throw 'la h que ser un numero hasta donde quieres que multiplique'
                        }
                        return true;
                    })
                    .argv;

module.exports={argv}