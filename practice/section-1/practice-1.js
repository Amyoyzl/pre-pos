'use strict';

function collectSameElements(collectionA, collectionB) {
  let k = 0;
  let array = new Array();
  collectionA.forEach(e => {
      collectionB.forEach(item => {
          if (e == item) array.push(item);
      })
  })
  return array;
}