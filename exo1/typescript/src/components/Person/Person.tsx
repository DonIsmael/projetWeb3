import Gender from "./Gender";

class Person {
  _name: string;
  _number: number;
  _gender: Gender;

  constructor(c: string, b: number, a: Gender) {
    this._name = c;
    this._number = b;
    this._gender = a;
  }

  get name() {
    return this._name;
  }
  get number() {
    return this._number;
  }
  get gender() {
    return this._gender;
  }

  afficherPerson() {
    return (
      <div>
        <p>
          {this.name} {this.number} {this.gender}
        </p>
      </div>
    );
  }
}
const test = new Person("azert", 67, Gender.WOMAN);
console.log(test);

export default Person;
