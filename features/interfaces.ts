interface Vehicle {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,

  summary(): string {
    return 'dasd';
  },
};

const drink1 = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printVehicle = (item: Vehicle): void => {
  console.log(item.summary());
};

printVehicle(oldCivic);
printVehicle(drink1);
