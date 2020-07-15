const axios = require('axios');




const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);



    const instance = axios.create({
        baseURL: `https://geocode.xyz/${encodeUrl}?json=1`,

        headers: { 'json': 1 }
    });


    const resp = await instance.get();

    if (resp.data.error != undefined) {

        throw new Error(`No hay resultados para la ${dir}`);
    }

    const data = resp.data;
    const direccion = data.standard.city;
    const lat = data.latt;
    const lng = data.longt;



    return {
        direccion,
        lat,
        lng

    }

};




module.exports = {
    getLugarLatLng


};