
const {Country,Activity } = require('../db.js');
module.exports = async (id) => {
    try {
        const country = await Country.findOne({where: {id:id},
            include: [{ model: Activity }],           
          })
        return country;
    } catch (error) {
        console.log(error)
    }
}