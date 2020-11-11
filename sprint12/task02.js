// The SpeedLimiter class constructor accepts 2 parameters: the current vehicle speed and an overspeed warning function. The current vehicle speed and warning function must be stored in privateSpeed ​​and privateWarning using WeakMap(). Private variables are initialized in the class constructor.

// The privateWarning function is called when the current privateSpeed ​​vehicle speed exceeds the maximum permissible speed of 200 km / h. The warning function displays the message "You are driving too fast! Your speed is reduced."

// The SpeedLimiter class has an accelerate(value) method, which increases the current speed of the car by the value value (the result is written in the private variable privateSpeed), displays the current speed value in the console. If the value of the current speed exceeds the maximum allowable, the function is called, which is contained in privateWarning, which generates a warning message, and the value of the speed is reduced to the maximum allowable, and displayed in the console.

const privateSpeed = new WeakMap();
const privateWarning = new WeakMap();

class SpeedLimiter {
  constructor(private_Speed, private_Warning) {
    privateSpeed.set(this, private_Speed);
    privateWarning.set(this, private_Warning);
  }

  accelerate(value) {
    privateSpeed.set(this, privateSpeed.get(this) + value);
    console.log('Current speed: ' + privateSpeed.get(this) + ' km/h');
    if (privateSpeed.get(this) > 200) {
      privateWarning.get(this)();
      privateSpeed.set(this, 200);
      console.log('Current speed: ' + privateSpeed.get(this) + ' km/h');
    }
  }
}
