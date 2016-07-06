if (Meteor.isServer){
	/* AWS IoT Configuration Initiate here */
	var awsIot = Meteor.npmRequire('aws-iot-device-sdk');
  var Fiber = Meteor.npmRequire('fibers');

    // certs configuration
    var device = awsIot.device({
       keyPath: '<YOUR-DIRECTORY-TO-PRIVATE.PEM>',
       certPath: '<YOUR-DIRECTORY-TO-CERT.PEM>',
       caPath: '<YOUR-DIRECTORY-TO-ROOTCA.PEM>',
      clientId: 'platform',
        region: 'us-west-2'
    });

    // Function to be execute if the event of successful connection occur
    device.on('connect', function(){
		var date = new Date().toISOString();
		device.subscribe('IoTHome/#'); // subscription
		device.publish('IoTHome/system', 'Platform is ONLINE: ' + date);
    });

    // Function to be execute if any event of incoming messages
    device.on('message', function(topic, message) {
		Fiber(function(){
			Meteor.call('printMsg', topic, message.toString());	// for debug purpose
			Meteor.call('inputData', topic, message.toString());
		}).run();
    });

    device.on('offline', function(){
		var date = new Date().toISOString();
		device.publish('IoTHome/system', 'Platform is OFFLINE at: ' + date);
		device.end();
    });

    device.on('close', function(){
		var date = new Date().toISOString();
		device.publish('IoTHome/system', 'Platform is OFFLINE at: ' + date);
		device.end();
    });
}
