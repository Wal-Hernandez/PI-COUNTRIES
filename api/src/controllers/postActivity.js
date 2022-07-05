const {Activity,Country } = require('../db.js');
module.exports = async ({ name, difficultly, duration, season, region,countries }) => {
    try {
        let [activity, created] = await Activity.findOrCreate({
            where: { name: name },
            defaults: {
              name,  
              difficultly,
              duration,
              region,
              season,
            },
          }); 
          let countriesDB = await Country.findAll({ where: { id: countries } });    
          console.log(countriesDB,countries)  
          countriesDB.map(async country => {
           await country.addActivity(activity.dataValues.id);
        })
        if(created){
          return activity;
        }else{
          return null
        }
       
     
    } catch (error) {
        console.log(error)
    }
}