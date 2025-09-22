const fs = require("fs");
colors = require('colors');
/*


const crearArchivo = (base) => {
    const promesa = new Promise((resolve, reject) => {

        console.log("================");
        console.log(` Tabla del ${base}`);
        console.log("================");
        
        let pantalla='';
        
        for(let i=1;i<=10;i++){
            pantalla+=`   ${base} x ${i} = ${base*i}\n`;
        }
        console.log(pantalla);

        let encabezado='';
        encabezado=`================\n`;
        encabezado+= `  Tabla del ${base}\n` 
        encabezado+=`================\n`;
        let salida='';
    
        for(let i=1;i<=10;i++){
            salida+=`   ${base} x ${i} = ${base*i}\n`;
        }
        salida=encabezado+salida;
        console.log(salida);
    
        fs.writeFileSync(`tabla-${base}.txt`,salida);

        resolve(`tabla-${base}.txt`)
        
    });
    return promesa;
}
*/

const crearArchivo = async(base,hasta,listar) => {
    try {
        if(listar===true){
           console.log("================".magenta);
            console.log(' Tabla del '.bgBrightYellow,base.toString().bgRed);
            console.log("================".magenta);
            
            let pantalla='';
            
            for(let i=1;i<=hasta;i++){
                //pantalla+=`   ${base} x ${i} = ${base*i}\n`; 
                pantalla+=base.toString().red+' x '.brightYellow+i.toString().cyan+ ' = '.brightYellow  +(base*i).toString().brightMagenta+'\n';
            }
            console.log(pantalla);         
        }



        let encabezado='';
        encabezado=`================\n`;
        encabezado+= `  Tabla del ${base}\n` 
        encabezado+=`================\n`;
        let salida='';
    
        for(let i=1;i<=hasta;i++){
            salida+=`   ${base} x ${i} = ${base*i}\n`;
        }
        salida=encabezado+salida;
        //console.log(salida);
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }

}

module.exports = {crearArchivo};