(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("untitled",
{ "compressionlevel":-1,
 "height":4,
 "infinite":false,
 "layers":[
        {
         "data":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":4,
         "id":1,
         "name":"pozadina",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":12,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":6,
         "name":"Object Layer 1",
         "objects":[
                {
                 "gid":143,
                 "height":64,
                 "id":1,
                 "name":"katana",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":256,
                 "y":192
                }, 
                {
                 "gid":144,
                 "height":64,
                 "id":3,
                 "name":"katanal",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":320,
                 "y":192
                }, 
                {
                 "gid":145,
                 "height":64,
                 "id":4,
                 "name":"mac",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":192,
                 "y":192
                }, 
                {
                 "gid":146,
                 "height":64,
                 "id":5,
                 "name":"strelica",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":704,
                 "y":192
                }, 
                {
                 "gid":147,
                 "height":64,
                 "id":9,
                 "name":"metak",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":512,
                 "y":192
                }, 
                {
                 "gid":156,
                 "height":64,
                 "id":10,
                 "name":"munja",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":64,
                 "x":384,
                 "y":192
                }],
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"items"
                }],
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108],
         "height":4,
         "id":3,
         "name":"pod",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":12,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":4,
         "id":7,
         "name":"bebop",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"bebop"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":12,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":4,
         "id":9,
         "name":"boss",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"boss"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":12,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 148, 149, 150, 151, 152, 153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":4,
         "id":8,
         "name":"enemy",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"enemy"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":12,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 148, 149, 150, 151, 152, 153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":4,
         "id":10,
         "name":"enemy2",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"enemy2"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":12,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 148, 149, 150, 151, 152, 153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":4,
         "id":11,
         "name":"enemy3",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"enemy3"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":12,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":4,
         "id":5,
         "name":"leonardo",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"leonardo"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":12,
         "x":0,
         "y":0
        }],
 "nextlayerid":12,
 "nextobjectid":11,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.8.2",
 "tileheight":64,
 "tilesets":[
        {
         "columns":32,
         "firstgid":1,
         "image":"maps\/tmnt\/pics\/Arcade - Teenage Mutant Ninja Turtles - Stage 5.png",
         "imageheight":319,
         "imagewidth":2111,
         "margin":0,
         "name":"Arcade - Teenage Mutant Ninja Turtles - Stage 5",
         "spacing":0,
         "tilecount":128,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#ff00ff"
        }, 
        {
         "columns":1,
         "firstgid":129,
         "image":"maps\/tmnt\/pics\/des.png",
         "imageheight":448,
         "imagewidth":64,
         "margin":0,
         "name":"des",
         "spacing":0,
         "tilecount":7,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#ff00ff"
        }, 
        {
         "columns":1,
         "firstgid":136,
         "image":"maps\/tmnt\/pics\/livo.png",
         "imageheight":448,
         "imagewidth":64,
         "margin":0,
         "name":"livo",
         "spacing":0,
         "tilecount":7,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#ff00ff"
        }, 
        {
         "columns":1,
         "firstgid":143,
         "image":"maps\/tmnt\/pics\/katana.png",
         "imageheight":64,
         "imagewidth":64,
         "margin":0,
         "name":"katana",
         "spacing":0,
         "tilecount":1,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#ff00ff"
        }, 
        {
         "columns":1,
         "firstgid":144,
         "image":"maps\/tmnt\/pics\/katanal.png",
         "imageheight":64,
         "imagewidth":64,
         "margin":0,
         "name":"katanal",
         "spacing":0,
         "tilecount":1,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#ff00ff"
        }, 
        {
         "columns":1,
         "firstgid":145,
         "image":"maps\/tmnt\/pics\/ninja.png",
         "imageheight":64,
         "imagewidth":64,
         "margin":0,
         "name":"ninja",
         "spacing":0,
         "tilecount":1,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#ff00ff"
        }, 
        {
         "columns":1,
         "firstgid":146,
         "image":"maps\/tmnt\/pics\/strelica.png",
         "imageheight":64,
         "imagewidth":64,
         "margin":0,
         "name":"strelica",
         "spacing":0,
         "tilecount":1,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#ff00ff"
        }, 
        {
         "columns":1,
         "firstgid":147,
         "image":"maps\/tmnt\/pics\/piu.png",
         "imageheight":64,
         "imagewidth":64,
         "margin":0,
         "name":"piu",
         "spacing":0,
         "tilecount":1,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#ff00ff"
        }, 
        {
         "columns":1,
         "firstgid":148,
         "image":"maps\/tmnt\/pics\/1.png",
         "imageheight":64,
         "imagewidth":64,
         "margin":0,
         "name":"1",
         "spacing":0,
         "tilecount":1,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#ff00ff"
        }, 
        {
         "columns":1,
         "firstgid":149,
         "image":"maps\/tmnt\/pics\/2.png",
         "imageheight":64,
         "imagewidth":64,
         "margin":0,
         "name":"2",
         "spacing":0,
         "tilecount":1,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#ff00ff"
        }, 
        {
         "columns":1,
         "firstgid":150,
         "image":"maps\/tmnt\/pics\/3.png",
         "imageheight":64,
         "imagewidth":64,
         "margin":0,
         "name":"3",
         "spacing":0,
         "tilecount":1,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#ff00ff"
        }, 
        {
         "columns":1,
         "firstgid":151,
         "image":"maps\/tmnt\/pics\/d1.png",
         "imageheight":64,
         "imagewidth":64,
         "margin":0,
         "name":"d1",
         "spacing":0,
         "tilecount":1,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#ff00ff"
        }, 
        {
         "columns":1,
         "firstgid":152,
         "image":"maps\/tmnt\/pics\/d2.png",
         "imageheight":64,
         "imagewidth":64,
         "margin":0,
         "name":"d2",
         "spacing":0,
         "tilecount":1,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#ff00ff"
        }, 
        {
         "columns":1,
         "firstgid":153,
         "image":"maps\/tmnt\/pics\/d3.png",
         "imageheight":64,
         "imagewidth":64,
         "margin":0,
         "name":"d3",
         "spacing":0,
         "tilecount":1,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#ff00ff"
        }, 
        {
         "columns":1,
         "firstgid":154,
         "image":"maps\/tmnt\/pics\/bebop.png",
         "imageheight":64,
         "imagewidth":64,
         "margin":0,
         "name":"bebop",
         "spacing":0,
         "tilecount":1,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#ff00ff"
        }, 
        {
         "columns":1,
         "firstgid":155,
         "image":"maps\/tmnt\/pics\/shredder.png",
         "imageheight":64,
         "imagewidth":64,
         "margin":0,
         "name":"shredder",
         "spacing":0,
         "tilecount":1,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#ff00ff"
        }, 
        {
         "columns":1,
         "firstgid":156,
         "image":"maps\/tmnt\/pics\/munja.gif",
         "imageheight":64,
         "imagewidth":64,
         "margin":0,
         "name":"munja",
         "spacing":0,
         "tilecount":1,
         "tileheight":64,
         "tilewidth":64,
         "transparentcolor":"#ff00ff"
        }],
 "tilewidth":64,
 "type":"map",
 "version":"1.8",
 "width":12
});