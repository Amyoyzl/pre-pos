'use strict';

function collectSameElements(collectionA, collectionB) {
  let n = 0;
  let array = [];
  collectionA.forEach(e => {
      collectionB.forEach(item => {
          item.forEach(i => {
              if (e == i) array.push(i);
          })
      })
  })
  return array;
}
