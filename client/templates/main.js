UI.registerHelper('formatTimeandDate', function(time) {
	if(time)
		return moment(time).format('ddd, hh:mm a, MM.DD.YYYY');
});

UI.registerHelper('formatTimeandDate3', function(time) {
	if(time)
		return moment(time).format('ha, MM.DD.YYYY');
});