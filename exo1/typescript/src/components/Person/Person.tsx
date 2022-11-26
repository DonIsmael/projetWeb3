import Gender from "./Gender";

class Person {
  _name: string;
  _number: number;
  _gender: Gender;

  // constructor
  constructor(a: string, b: number, c: Gender) {
    this._name = a;
    this._number = b;
    this._gender = c;
  }

  // getter
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
console.log(test.name, test.number, test.gender);
// sortie : azert 67 WOMAN

export default Person;
