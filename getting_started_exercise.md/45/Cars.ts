interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any; // allows for arbitrary key-value pairs
}

function createCar(manufacturer: string, model: string, ...options: [string, any][]): Car {
  const car: Car = { manufacturer, model };
  options.forEach(([key, value]) => {
    car[key] = value;
  });
  return car;
}

const myCar = createCar('Toyota', 'Camry', ['color', 'silver'], ['sunroof', true]);
console.log(myCar);