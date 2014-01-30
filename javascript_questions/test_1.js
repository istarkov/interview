'use strict';
//пояснить почему в консоль выводится то, что выводится

var a={};
var b = Object.create(a);

a.x = 'AX2';
console.log(b.x);

b.x = 'BX2';
console.log(a.x); //ВНИМАТЕЛЬНО ТУТ "a.x" а не "b.x"

a.x = 'AX3';
console.log(b.x);

delete b.x;
console.log(b.x);
