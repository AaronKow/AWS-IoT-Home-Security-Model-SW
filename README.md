## AWS-IoT-Home-Security-Model-SW
Source codes for IoT Home Security Model using AWS IoT. **AWS IoT** model emphasis on security in the cloud and cover strong authentication, for each of IoT device to be connected require credentials (X.509 certificate and AWS credential) to access the message broker. TLS is used to encrypts the connection between the device and the broker and this create an end-to-end secure communication.

#### Disclaimer
THIS REPO IS INTENDED FOR EDUCATION PURPOSES ONLY. This repo will not longer be maintain and improve, unless I have any future plan for it. (Currently, no... )

#### Meteor Version
METEOR@1.2.1

#### Configuration
In order to use this source code, you need to change the cert configuration in `server > server.js` file:
![AWS-IoT-Home-Security-Model-SW Cert Configuration](https://raw.githubusercontent.com/AaronKow/AWS-IoT-Home-Security-Model-SW/master/public/config.jpg)
