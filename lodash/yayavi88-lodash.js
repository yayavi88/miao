var yayavi88 = {
  chunk: function (array, size) {
    result = [];
    arr = [];
    if (array.length > size) {
      arr = array.splice(0, size);
      result.push(arr);
    }
    arr = array.slice(0);
    result.push(arr);
    return result;
  },



  flattenDeep: function (array) {
    var result = [];
    array.forEach(function (item) {
      if (Array.isArray(array)) {
        flattenDeep(item);
      } else {
        result.push(item);
      }
    });
    return result;
  },




}
