class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  public talk(): void {
    console.log('abcxyz');
  }

  public run(): void {
    console.log('run');
  }
}

class User extends Person {
  constructor(public age: number, name: string) {
    super(name);
  }

  public talk(): void {
    console.log('abcxyzzzzzz');
  }
}

const person1 = new User(2, 'tien');

console.log(person1.name);
