'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let array = [];
  collectionA.forEach(e=>{
    if(e.length == 1) {
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
    } 
    if(e.charAt(1) == '-') {
      array.push({key: e.charAt(0), count: parseInt(e.substring(2))});
    }
  });
  for (let i = 0; i < array.length; i++) {
    objectB.value.forEach(e=>{
      if(array[i].key==e) {
        array[i].count -= Math.floor(array[i].count / 3);
      }
    })
  }
  return array;
}
