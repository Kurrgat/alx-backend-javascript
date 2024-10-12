import Building from './5-building.js';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Call parent class constructor
    this._floors = this._validateFloors(floors);
  }

  // Validate method
  _validateFloors(floors) {
    if (typeof floors !== 'number' || floors <= 0) {
      throw new TypeError('Number of floors must be a positive number');
    }
    return floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}

export default SkyHighBuilding;
