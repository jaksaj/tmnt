//#region okvir
/// <reference path="../otter/lib-00-GameSettings.js"/>
/// <reference path="../otter/lib-01-tiled.js"/>
/// <reference path="../otter/lib-02-sensing.js"/>
/// <reference path="../otter/lib-03-display.js"/>
/// <reference path="../otter/lib-04-engine.js"/>
/// <reference path="../otter/lib-05-game.js"/>
/// <reference path="../otter/lib-06-main.js"/>
//#endregion

// ovdje pišete svoje klase
class Bebop extends Sprite{
  constructor(x, y, layer) {
    super(x, y, 60, 60);
    this.frame_sets = {
        "up": [1],
        "walk-up": [1],
        "right": [1],
        "walk-right": [1],
        "down": [1],
        "walk-down": [1],
        "left": [1],
        "walk-left": [1]
    };

    this.layer = layer;
    this.visible = true;
  }
  pucaj(p) {
    p.put = 0;
    p.x = this.x;
    p.y = this.y-5;
    p.visible = true;
    p.move = true;
  }
}
class Boss extends Bebop{
  constructor(x,y,layer){
    super(x,y,layer);
  }
}
class Leonardo extends Sprite {
    constructor(x, y, layer) {
        super(x, y, 60, 60);
        this.frame_sets = {
            "up": [4],
            "walk-up": [4],
            "right": [4],
            "walk-right": [4,5,6,7,1,2,3],
            "down": [4],
            "walk-down": [4],
            "left": [11],
            "walk-left": [11,12,13,14,15,9,10]
        };

        this.layer = layer;
        this.visible = true; //tek kad se postavi layer
        this.macevi=1;
    }
    moveRight() {
        this.direction = 90;
        this.velocity_x += 1;
      }
    
    moveLeft() {
      this.direction = 270;
      this.velocity_x -= 1;
    }
    jump(h = 40) {

      if (!this.jumping) {
  
        this.jumping = true;
        this.velocity_y -= h;
    
      }
    }
    collect(m){
      m.visible=false;
      this.macevi+=m.value;
      m.start();
    }
    pucaj(p) {
      p.put = 0;
      p.x = this.x;
      p.y = this.y-10;
      p.visible = true;
      p.move = true;
    }
}
class Collectable extends Item {

  constructor(layer) {
    super(layer);
    if (this.constructor==Collectable){
      throw new Error("apstraktna klasa se ne moze instancirati");
    }
  }

  getType() {
    return this.constructor.name;
  }

}
class Mac extends Collectable{
  constructor(layer){
    super(layer);
    this.value=1;
  }
  start(){
    let slbr=Postavke.random(0,6*64);
    this.x=slbr;
    this.y=0;
    this.visible=true;
  }
}
class Projektil extends Item {
  constructor(layer) {
    super(layer);
    this.visible = false;
    this.put = 0;
    this.move = true;
  }

  get put() {
    return this._put;
  }
  set put(v) {
    if (v >= 200) {
      this._put = 0;
      this.move = false;
      this.visible = false;
    }
    else {
      this._put = v;
    }
  }

  updatePosition() {
    if (this.move) {
        this.x += 5;
        this.put += 5;
    }
  }

  stop() {
    this.visible = false;
    this.move = false;
  }
}
class Projektill extends Projektil{
  constructor(layer){
    super(layer);
  }
  updatePosition() {
    if (this.move) {
        this.x -= 5;
        this.put += 5;
    }
  }
  
}
class Munja extends Projektill{
  constructor(layer){
    super(layer);
  }
  get put() {
    return this._put;
  }
  set put(v) {
    if (v >= 500) {
      this._put = 0;
      this.move = false;
      this.visible = false;
    }
    else {
      this._put = v;
    }
  }
  updatePosition() {
    if (this.move) {
        this.x -= 10;
        this.put += 10;
    }
  }
}
class Cilj extends Collectable {
  constructor(layer) {
    super(layer);
  }

  updatePosition(){}
}
class Enemy extends Sprite{
  constructor(x,y,layer){
    super(x,y,60,60);
    this.frame_sets={
      "up": [2],
      "walk-up": [2],
      "right": [4],
      "walk-right": [5, 6,7,5,6,7],
      "down": [2],
      "walk-down": [2],
      "left": [2],
      "walk-left": [2,3,4]
    };
    
    this.layer=layer;
    this.visible=true;
    this.desno=true;


    this.pozicije=[[x,y]];
    this.t=0;
  }
  moveRight(){
    this.direction=90;
    this.velocity_x+=0.5;
  }
  moveLeft(){
    this.direction=270;
    this.velocity_x-=0.5;
  }


}