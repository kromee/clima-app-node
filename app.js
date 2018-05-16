
const lugar = require('./lugar/lujar')
const clima  = require('./clima/clima')



const argv = require('yargs').options({
    direccion:{
        alias:'d',
        desc:'Dirección de la ciudad para obtener el clima',
        demand:true
    }
}).argv;


let getInformacion = async(direccion)=>{
    try
    {
        let coords=  await lugar.getLugarlatlng (direccion);
        let Temperatura = await clima.getClima(coords.lat, coords.lng);

        return `El clima en ${coords.direccion} es de ${Temperatura} `;


    }catch(e){
    return  `No se pudo determinar el clima en ${direccion}`;
    }
}


// lugar.getLugarlatlng(argv.direccion)
// .then(resp=>{
//     console.log(resp);
// })
// .catch(e => console.log(e));


// clima.getClima(23.634501, -102.552784)
// .then(temp=> console.log(temp))
// .catch(e=>console.log(e));

getInformacion(argv.direccion)
.then(mensaje=>console.log(mensaje))
.catch(e=> console.log(e));
