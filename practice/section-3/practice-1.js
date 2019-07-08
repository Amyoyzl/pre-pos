'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for (let i = 0; i < collectionA.length; i++) {
    objectB.value.forEach(e=>{
      if(collectionA[i].key==e) {
        collectionA[i].count --;
      }
    })
  }
  return collectionA;
}
