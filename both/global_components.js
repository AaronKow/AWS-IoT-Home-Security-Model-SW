if(Meteor.isClient){
	renderRealTime = function(database, allData, timeFrame, SensorName){
		var rawData = database.find().fetch();
		var arrayData = [];

		for (var i=0; i<rawData.length; i++){
			arrayData.push(rawData[i]);
		}

		// instantiate Rickshaw graph
		var graph = new Rickshaw.Graph( {
			element: document.getElementById("realTimeMonitor"),
			width: 1200,
			height: 400,
			renderer: 'line',
			series: [
				{
					name: SensorName,
					color: "#c05020",
					data: arrayData
				}
			]
		} );

		// x-axis label
		var xAxis = new Rickshaw.Graph.Axis.Time({
			graph: graph
		});

		// Show hover detail
		var hoverDetail = new Rickshaw.Graph.HoverDetail( {
			graph: graph
		} );

		// y-axis label
		var yAxis = new Rickshaw.Graph.Axis.Y({
			graph: graph
		});

		// legend
		var legend = new Rickshaw.Graph.Legend( {
			element: document.querySelector('#legend'),
			graph: graph
		} );

		// render graph
		graph.render();

		setInterval( function() {

			if(allData){
				/* Fetch for all real-time data */
				var newRawData = database.find().fetch();
				if(newRawData.length > arrayData.length){
				for (var j=0; j<(newRawData.length-arrayData.length); j++){
						arrayData.push(newRawData[j+arrayData.length]);
					}
				}
			} else {
				/* Fetch real-time within defined time only */
				var newRawData = database.find().fetch();
				arrayData.splice(0, arrayData.length);
				var curSecond = (new Date).getTime()/1000;
				for (var j=0; j<newRawData.length; j++){
				  if((curSecond - newRawData[j].x) <= timeFrame){  // set the time frame here, in seconds
				    arrayData.push(newRawData[j]);
				  }
				}
			}

		graph.update();
		}, 1000 );
	};
}
