'use strict';

function countSameElements(collection) {
  let array = [];
  collection.forEach(e=>{
    if(array.length==0) {
      array.push({key: e, count: 1});
    }
    else {
      let i;
      for(i = 0; i < array.length; i++) {
        if(e==array[i].key) {
          array[i].count ++;
          break;
        }
      }
      if(i == array.length) 
        array.push({key: e, count: 1});
    }
  })
  return array;
}
