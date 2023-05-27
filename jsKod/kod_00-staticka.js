class Postavke {

  constructor() {
    if (this instanceof Postavke) {
      throw new Error("Statička klasa nema instance!");
    }
  }


  static leonardo =null;
  static mac=null;
  static projektil;
  static projektill;
  static munja;
  static cilj=null;
  static bebop=null;
  static metak;
  static e1;
  static e2;
  static e3;
  static boss=null;
  static random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}