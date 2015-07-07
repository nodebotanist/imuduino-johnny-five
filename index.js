var five = require('johnny-five')

var board = new five.Board();

board.on('ready', function(){

	var compass = new five.Compass({
    controller: 'HMC5883L'
  })

  var gyro = new five.Gyro({
	  controller: 'MPU6050',
	  sensitivity: 131 // optional
	})

  compass.on('headingchange', function() {
    console.log('headingchange');
    console.log('  heading : ', Math.floor(this.heading));
    console.log('  bearing : ', this.bearing.name);
    console.log('--------------------------------------');
  })

  compass.on('data', function() {
    console.log('  heading : ', Math.floor(this.heading));
    console.log('  bearing : ', this.bearing.name);
    console.log('--------------------------------------');
  })

  gyro.on('change', function() {
    console.log('gyro');
    console.log('  x            : ', this.x);
    console.log('  y            : ', this.y);
    console.log('  z            : ', this.z);
    console.log('  pitch        : ', this.pitch);
    console.log('  roll         : ', this.roll);
    console.log('  yaw          : ', this.yaw);
    console.log('  rate         : ', this.rate);
    console.log('  isCalibrated : ', this.isCalibrated);
    console.log('--------------------------------------');
  })
})