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
