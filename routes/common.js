var common = {
	pageFlag: function() {
		return {
			users: false,
			projects: false,
			news: false,
			introduce:false
		}
	},
	getDate: function() {

		var date = new Date();
		var year, month, day;

		year = date.getFullYear();
		month = date.getMonth() + 1;
		day = date.getDate();
		return year + '-' + month + '-' + day;

	}
};

module.exports = common;