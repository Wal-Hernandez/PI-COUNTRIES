const getCountriesApi = require('./getCountriesApi.js')
const getCountryDetails = require('./getCountryDetails.js')
const postActivity = require('./postActivity.js')
const getActivity = require('./getActivity.js')
const {Country, Activity } = require('../db.js');
const { Op } = require("sequelize");
module.exports = {
    getCountriesApi,
	getCountryDetails,
	postActivity,
	getActivity,
    getGames: async function(name) {
		await getCountriesApi();
		let dbd = [];
		if(name){
			dbd = await Country.findAll({
				where: {
					name: {
						[Op.iLike]: `%${name}%`
					}
			},
			});
		}else{
			dbd = await Country.findAll({include: [{ model: Activity }], })
		}
	

		return dbd;
	},
	getDetails: async function(id){
		let details = await getCountryDetails(id);
		return details ? details : null; 
	},
}