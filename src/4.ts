class Key {
  signature: number = Math.random();
  getSignature(): number {
    return this.signature;
  }
}
class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}
abstract class House {
  door: boolean;
  key: Key{};
  tenants: Person[];
  comeIn(person: Person);
}
class MyHouse extends House {
  openDoor();
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
