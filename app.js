const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direcion de la ciduad para obtener el clima',
        demand: true

    }
}).argv;



const getInfo = async(direccion) => {

    try {

        const respuesta = await lugar.getLugarLatLng(direccion)
        const clima1 = await clima.getClima(respuesta.lat, respuesta.lng)
        return `El clima de ${respuesta.direccion} es de ${ clima1}`;

    } catch (error) {

        return `No se pudo determinar el clima de ${respuesta.direccion}`;


    }




}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)