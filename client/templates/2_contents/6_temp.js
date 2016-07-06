Template.temperatureMonitor.events({
	'click #playRealTime': function(){
		/* Remove and recreate new real-time graph */
		$("#chart_container").remove();
		$("#legend").remove();
		$("#marker").append("<div id='chart_container'><div id='y_axis'></div><div id='realTimeMonitor'></div></div><div id='legend'></div>");

		var e = document.getElementById("realTimeConfigure");
		var timeFrame = e.options[e.selectedIndex].value;

		if(timeFrame === 'all'){
			renderRealTime(TempDB, true, null, 'Temperature Data');
		} else {
			renderRealTime(TempDB, false, timeFrame, 'Temperature Data');
		}
	}
});