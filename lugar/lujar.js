const axios = require('axios');


const getLugarlatlng = async (direccion)=>{


    let encodeurl =  encodeURI(direccion);

let  resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeurl}&key=AIzaSyAffot1HbZB1Mjnau6_f5L4NYW5EpB-jw0`)
  
if (resp.data.status==='ZERO_RESULTS')
{
    throw new Errors (`NO hay resultados para la ciudad ${direccion}`);

}


   
        let location = resp.data.results[0];
        let coordenadas = location.geometry.location;
  
    return {
        direccion :  location.formatted_address,
         lat:coordenadas.lat,
        lng: coordenadas.lng
    }
}


module.exports={
    getLugarlatlng
}

