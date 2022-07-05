
const {Activity } = require('../db.js');
module.exports = async (name) => {
    try {
        let response = await Activity.findAll()
        

       return response.map(act => {
        return {
            id: act.id,
            name: act.name,
        }
       });
    } catch (error) {
        console.log(error)
    }
}