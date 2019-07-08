'use strict';

function collectSameElements(collectionA, objectB) {
  let n = 0;
  let array = [];
  collectionA.forEach(item => {
      objectB.value.forEach(e => {
          if (item.key == e) array.push(e);
      })
  })
  return array;
}
