// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

const robot = {
  _model: '1E78V2', // key value (confidentiale)
  _energyLevel: 100, // key value (confidentiale)
  _numOfSensors: 15, // key value (confidentiale)
  get numOfSensors(){ // use method get(ters) with the method 'numOfSensors()'
    if(typeof this._numOfSensors === 'number'){ // if _numOfSensors is equal to un number with typeof operator 
      return this._numOfSensors; // return _numOfSensors
    } else { // else (or)
      return 'Sensors are currently down.' // return 'Sensors are currently down.'
    }
  },
  set numOfSensors (num) { // use method set(ters) with the method 'numOfSensors()'
    if(typeof num === 'number' && num >= 0) { // if num is a number using the typeof operator => num should also be greater than or equal to 0.   
      this._numOfSensors = num; // If both conditions are met, reassign this._numOfSensors to num.
    } else { // else (or)
      console.log('Pass in a number that is greater than or equal to 0'); // prints 'Pass in a number that is greater than or equal to 0'
    }
  }
};
robot.numOfSensors = 100; // assign _numOfSensors to 100
console.log(robot.numOfSensors); // prints 100 