'use strict';
function collectSameElements(collectionA, objectB) {
  let n = 0;
  let array = [];
  collectionA.forEach(e => {
      objectB.value.forEach(item => {
          if (e == item) array.push(item);
      })
  })
  return array;
}
