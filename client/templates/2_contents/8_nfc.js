Template.nfcMonitor.events({
	'click #playRealTime': function(){
		/* Remove and recreate new real-time graph */
		$("#chart_container").remove();
		$("#legend").remove();
		$("#marker").append("<div id='chart_container'><div id='y_axis'></div><div id='realTimeMonitor'></div></div><div id='legend'></div>");

		var e = document.getElementById("realTimeConfigure");
		var timeFrame = e.options[e.selectedIndex].value;

		if(timeFrame === 'all'){
			renderRealTime(NfcDB, true, null, 'NFC State');
		} else {
			renderRealTime(NfcDB, false, timeFrame, 'NFC State');
		}
	}
});