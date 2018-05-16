
const axios = require('axios');


const getClima = async (lat, lng)=>{





    let  resp = await axios.get(`http://samples.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=40ad5f307fadc4f0335056ea878fed00`)
    return   resp.data.main.temp;


     
}


module.exports={
    getClima  
}