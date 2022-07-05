const axios = require('axios');
const {Country } = require('../db.js');
module.exports = async (name) => {
    try {
       let response =  await axios.get("https://restcountries.com/v3/all")
   
       values = response.data.map(i =>{return {
        id: i.cca3,
        name: i.translations.spa.common,
        image: i.flags,
        region: i.region ? i.region : "unvalid continents", 
        capital: i.capital ? i.capital[0] : "unvalid capital"  ,
        subregion: i.subregion || null,
        area:i.area || 0,
        population: i.population || 0,   
        }
       });
       for (let e of values) {
        await Country.findOrCreate( {
            where: { id: e.id },
            defaults: {
        id:  e.id,
        name: e.name,
        image: e.image[1],
        region: e.region, 
        capital: e.capital,
        subregion: e.subregion,
        area:e.area,
        population:e.population,  
       }}   )
       }

       return values
    } catch (error) {
        console.log(error)
    }
}