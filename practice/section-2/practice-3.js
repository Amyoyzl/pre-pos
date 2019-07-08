'use strict';

function countSameElements(collection) {
  let array = [];
  collection.forEach(e => {
    if (array.length == 0 && e.length == 1) {
      array.push({ name: e, summary: 1 });
    }
    else {
      let i;
      for (i = 0; i < array.length; i++) {
        if (e.charAt(0) == array[i].name) {
          if (e.length == 1)
            array[i].summary++;
          else
            array[i].summary += parseInt(e.substring(2));
          break;
        }
      }
      if (i == array.length) {
        if (e.length == 1) array.push({ name: e, summary: 1 });
        else array.push({ name: e.charAt(0), summary: parseInt(e.substring(2)) });
      }
    }
  })
  return array;
}
