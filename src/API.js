const vehicles = [
  {id: 1, type: 'passenger', color: 'Dark Blue', make: 'Toyota', model: 'Corolla'},
  {id: 2, type: 'passenger', color: 'Black', make: 'Toyota', model: 'Corolla'},
  {id: 3, type: 'passenger', color: 'White', make: 'Toyota', model: 'Yaris'},
  {id: 4, type: 'SUV', color: 'Dark Green', make: 'Toyota', model: '4Runner'},
  {id: 5, type: 'Truck', color: 'Navy', make: 'Toyota', model: 'Tundra'},
  {id: 6, type: 'passenger', color: 'Silver', make: 'Toyota', model: 'Prius'},
  {id: 7, type: 'passenger', color: 'Red', make: 'Honda', model: 'Civic'},
  {id: 8, type: 'passenger', color: 'Black', make: 'Honda', model: 'Civic'},
  {id: 9, type: 'SUV', color: 'Silver', make: 'Honda', model: 'CR-V'},
  {id: 10, type: 'Truck', color: 'Red', make: 'Honda', model: 'Ridgeline'},
];

export const getVehicles = () => {
  return Promise.resolve(vehicles);
}
