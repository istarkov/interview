'use strict';
var q=require('q');

var kERROR_NUM = 3; //могу изменить
var kINCREMENT = 1; //могу изменить

var query_db = function(x, callback) {
  setTimeout(function() {
    if(x>kERROR_NUM) {
      callback({e:"ERROR"});
    } else {
      callback(null, x + kINCREMENT);
    }
  }, 1000);
}

//------------------------------------------------------------------------------------------------
//переписать код ниже с использованием "Q" https://github.com/kriskowal/q
//есть ли преимущества у "Q", недостатки, в каких еще библиотеках приходилось использовать promise
query_db(1, function(err, r){
  if(err) return console.error(err);  
  query_db(r, function(err, r){
    if(err) return console.error(err);
    query_db(r, function(err, r){
      if(err) return console.error(err);
      console.log(r);
    });
  });
});

//------------------------------------------------------------------------------------------------
//написать реализацию тут с использованием q

