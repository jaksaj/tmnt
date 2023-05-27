//#region okvir
/// <reference path="../otter/lib-00-GameSettings.js"/>
/// <reference path="../otter/lib-01-tiled.js"/>
/// <reference path="../otter/lib-02-sensing.js"/>
/// <reference path="../otter/lib-03-display.js"/>
/// <reference path="../otter/lib-04-engine.js"/>
/// <reference path="../otter/lib-05-game.js"/>
/// <reference path="../otter/lib-06-main.js"/>
//#endregion

/// <reference path="kod_01-likovi.js"/>
/// <reference path="kod_02-postavke.js"/>

/**
 * Promjena stanja likova - interakcije
 */
function update_main() {
  if (GAME.activeWorldMap.name == "untitled")
    lvl1();
  GAME.update();

};


var end;
var t;
function lvl1() {
  if (SENSING.right.active) {
    Postavke.leonardo.moveRight();
  }
  if (SENSING.up.active) {
    Postavke.leonardo.jump();
  }
  if (SENSING.left.active) {
    Postavke.leonardo.moveLeft();
  }
  if (Postavke.leonardo.touching(Postavke.mac)) {
    Postavke.leonardo.collect(Postavke.mac);
  }
  if (SENSING.keyD.active && Postavke.leonardo.macevi>0&&Postavke.leonardo.frame_value<8&&Postavke.projektil.put==0&&Postavke.projektill.put==0) {
    Postavke.leonardo.pucaj(Postavke.projektil);
    Postavke.leonardo.macevi--;
  }
  if (SENSING.keyD.active && Postavke.leonardo.macevi>0&&Postavke.leonardo.frame_value>7&&Postavke.projektil.put==0&&Postavke.projektill.put==0) {
    Postavke.leonardo.pucaj(Postavke.projektill);
    Postavke.leonardo.macevi--;
  }
  if (Postavke.leonardo.touching(Postavke.metak)||Postavke.leonardo.touching(Postavke.bebop)||Postavke.leonardo.touching(Postavke.e1)||Postavke.leonardo.touching(Postavke.boss)||Postavke.leonardo.touching(Postavke.munja)||Postavke.leonardo.touching(Postavke.e2)||Postavke.leonardo.touching(Postavke.e3)) {
    btnGame.dispatchEvent(gameoverEvent);
  }
  if(Postavke.e1.visible){
    if (Postavke.e1.x-Postavke.leonardo.x>150) {
      if (Postavke.e1.desno) {
          Postavke.e1.moveRight();
      }
      else{
        Postavke.e1.moveLeft();
      }
      if (Postavke.e1.x>=400) {
        Postavke.e1.desno=false;
      }
      if(Postavke.e1.x<250){
        Postavke.e1.desno=true;
      }
    }
    else{
      Postavke.e1.moveLeft();
    }
    if (Postavke.e1.touching(Postavke.projektil)||Postavke.e1.touching(Postavke.projektill)) {
      Postavke.e1.visible=false;
    }
  }
  if (Postavke.leonardo.touching(Postavke.cilj)) {
    btnGame.dispatchEvent(levelupEvent);
  }
  if (Postavke.bebop.visible&&Postavke.metak.put==0) {
    Postavke.bebop.pucaj(Postavke.metak);
  }
  if (Postavke.bebop.touching(Postavke.projektil)||Postavke.bebop.touching(Postavke.projektill)) {
    Postavke.bebop.visible=false;
    Postavke.cilj.visible=true;
    }

  if (Postavke.projektil.touching(Postavke.boss)||Postavke.projektill.touching(Postavke.boss)) {
    Postavke.boss.visible=false;
    end = new Date().getTime();
    t=(end-start)/1000;
    btnGame.dispatchEvent(winEvent);
  }
  if (Postavke.boss.visible&&Postavke.munja.put==0&&!Postavke.e2.visible&&!Postavke.e3.visible) {
    Postavke.boss.pucaj(Postavke.munja);
  }
  if(Postavke.e2.visible){
    if (Postavke.e2.x-Postavke.leonardo.x<400) {
      Postavke.e2.moveLeft(); 
    }
    if (Postavke.e2.touching(Postavke.projektil)||Postavke.e2.touching(Postavke.projektill)) {
      Postavke.e2.visible=false;
    }
  }
  if(Postavke.e3.visible){
    if (Postavke.e3.x-Postavke.leonardo.x<400) {
      Postavke.e3.moveLeft(); 
    }
    if (Postavke.e3.touching(Postavke.projektil)||Postavke.e3.touching(Postavke.projektill)) {
      Postavke.e3.visible=false;
    }
  }
}

