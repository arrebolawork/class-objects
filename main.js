// Crear la clase Person, con propiedades name, age y genre, y el método obtDetails(), que muestra por consola las propiedades de la persona.
class Person {
  constructor(name, age, genre) {
    this.name = name;
    this.age = age;
    this.genre = genre;
  }
  obtDetails = () => {
    console.log(`El nombre es: ${this.name}, edad: ${this.age}, genero: ${this.genre}`);
  };
}
// Crear la clase Student, que hereda de Person, e incluye las propiedades course y group y el método register(), que muestre por consola el resultado.

class Student extends Person {
  constructor(name, age, genre, course, group) {
    super(name, age, genre);
    this.course = course;
    this.group = group;
  }
  register = () => {
    console.log(`El estudiante del curso ${this.course} y grupo: ${this.group} se llama : ${this.name}, edad: ${this.age}, genero: ${this.genre}`);
  };
}

// Crear la clase Teacher, que hereda de Person, e incluye las propiedades asignatura y level y el método assign(), que muestre por consola el resultado.

class Teacher {
  constructor(name, age, genre, asignature, level) {
    super(name, age, genre);
    this.asignature = asignature;
    this.level = level;
  }
  assign = () => {
    console.log(`El profesor o profesora de ${this.asignature} y nivel ${this.level} se llama : ${this.name}, edad: ${this.age}, genero: ${this.genre}`);
  };
}
// Construye las siguientes clases:

// Warrior:
class Warrior {
  // constructor(life, power): Establece el valor de las propiedades life y power
  constructor(life, power) {
    this.life = life;
    this.power = power;
  }
  // attack: Devuelve el valor de power del guerrero
  attack = () => {
    return this.power;
  };
  // defend(damage): resta el valor del parámetro recibido damage al valor de la propiedad life. Después, imprime el valor de la vida restante.
  defende = (damage) => {
    this.life = this.life - damage;
    return console.log(this.life);
  };
}

// Maya: extiende de la clase Warrior
class Maya extends Warrior {
  // constructor: Aquí establecemos los valores para el maya, que no hay que olvidar que es un guerrero.
  // drinkColaCao: Suma 10 al poder.
  drinkColaCao = () => {
    this.power += 10;
  };
}
// Aztec: extiende de la clase Warrior
class Aztec extends Warrior {
  // constructor: Aquí establecemos los valores para el azteca, que no hay que olvidar que es un guerrero.
  // drinkNesquik: Suma 10 a la vida.
  drinkNesquik = () => {
    this.life += 10;
  };
}

// Realiza la siguiente cadena de intercambio de golpes.
const newAzteca = new Aztec(20, 20);
const newMaya = new Maya(20, 20);
// Azteca bebe nesquik
newAzteca.drinkNesquik();
// Maya bebe Cola Cao
newMaya.drinkColaCao();
// Maya ataca a azteca. Azteca defiende.
newMaya.attack();
newAzteca.defende(5);
// Azteca ataca a maya. Maya defiende.
newAzteca.attack();
newMaya.defende(5);
