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

const btnGame = document.getElementById("btnGame");

const gameoverEvent = new CustomEvent("gameover", {
  detail: {
    win: false
  }
});

const winEvent = new CustomEvent("gameover", {
  detail: {
    win: true
  }
});
const levelupEvent = new Event("levelup");

function kraj(ev) {
  btnStop_click();
  if (ev.detail.win) {
    GAME.clearSprites();
    alert("Pobjeda!!!Trebalo vam je "+t+"s");
  }
  else {
    alert("Try again");
  }
}

btnGame.addEventListener("gameover", kraj);
btnGame.addEventListener("levelup", setuplvl2);
// što će se pokrenuti kad se klikne button Setup:
let btnSetupGame = document.getElementById("btnSetupGame");
btnSetupGame.addEventListener("click", setup);

function setup() {

  GAME.clearSprites();

  let odabrana = GAME.activeWorldMap.name;
  GameSettings.output(odabrana);

  switch (odabrana) {
    case "untitled":
      setuplvl1();
      break;
    default:
      throw "Ne postoji setup za " + GAME.activeWorldMap.name;
      break;
  }

  render_main();
}
/* LEVELS */
var start;
function setuplvl1() {
  GAME.clearSprites();

  GAME.activeWorldMap.setCollisions("pod");



  Postavke.leonardo = new Leonardo(0, 0, GAME.getSpriteLayer("leonardo"));
  Postavke.mac = new Mac(GAME.getSpriteLayer("mac"));
  GAME.addSprite(Postavke.mac);
  GAME.addSprite(Postavke.leonardo);
  Postavke.bebop=new Bebop(64*10,64*2,GAME.getSpriteLayer("bebop"));
  GAME.addSprite(Postavke.bebop);
  Postavke.mac.start();
  Postavke.projektil = new Projektil(GAME.getSpriteLayer("katana"));
  GAME.addSprite(Postavke.projektil);
  Postavke.projektill = new Projektill(GAME.getSpriteLayer("katanal"));
  GAME.addSprite(Postavke.projektill);
  Postavke.cilj=new Cilj(GAME.getSpriteLayer("strelica"));
  GAME.addSprite(Postavke.cilj);
  Postavke.cilj.y-=64;
  Postavke.cilj.visible=false;
  Postavke.metak=new Projektill(GAME.getSpriteLayer("metak"));
  GAME.addSprite(Postavke.metak);
  Postavke.e1=new Enemy(5*64,64*2,GAME.getSpriteLayer("enemy"));
  GAME.addSprite(Postavke.e1);
  Postavke.boss= new Boss(64*10,64*2,GAME.getSpriteLayer("boss"));
  Postavke.boss.visible=false;
  Postavke.munja=new Munja(GAME.getSpriteLayer("munja"));
  Postavke.munja.visible=false;
  Postavke.e2=new Enemy(5*64,64*2,GAME.getSpriteLayer("enemy2"));
  Postavke.e3=new Enemy(5*64,64*2,GAME.getSpriteLayer("enemy3"));
  Postavke.e2.visible=false;
  Postavke.e3.visible=false;
  start = new Date().getTime();

}
function setuplvl2() {
  btnStop_click();
  alert("New level");
  GAME.clearSprites();

  GAME.activeWorldMap.setCollisions("pod");
  Postavke.cilj.visible=false;


  Postavke.leonardo = new Leonardo(0, 0, GAME.getSpriteLayer("leonardo"));
  Postavke.mac = new Mac(GAME.getSpriteLayer("mac"));
  GAME.addSprite(Postavke.mac);
  GAME.addSprite(Postavke.leonardo);
  Postavke.mac.start();
  Postavke.projektil = new Projektil(GAME.getSpriteLayer("katana"));
  GAME.addSprite(Postavke.projektil);
  Postavke.projektill = new Projektill(GAME.getSpriteLayer("katanal"));
  GAME.addSprite(Postavke.projektill);
  Postavke.boss= new Boss(64*10,64*2,GAME.getSpriteLayer("boss"));
  GAME.addSprite(Postavke.boss);
  Postavke.munja=new Munja(GAME.getSpriteLayer("munja"));
  GAME.addSprite(Postavke.munja);
  Postavke.e2=new Enemy(8*64,64*2,GAME.getSpriteLayer("enemy2"));
  Postavke.e3=new Enemy(9*64,64*2,GAME.getSpriteLayer("enemy3"));
  GAME.addSprite(Postavke.e2);
  GAME.addSprite(Postavke.e3);
  btnStart_click();
}