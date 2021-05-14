const carMakers: string[] = ['ford', 'tesla', 'toyota'];

// help with inference when extracting values
const car1 = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values

carMakers.map((car: string): string => {
  return car.toLocaleUpperCase();
});

// flexible types
const importantDates: (string | Date)[] = [new Date(), '2030-10-10'];
