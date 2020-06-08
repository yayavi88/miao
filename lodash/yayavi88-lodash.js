var yayavi88 = {
  chunk,
  compact,
  concat,
  flattenDeep,
  before,
  after,
  ary,
  unary,
  flip,
  negate,
  spread,
  fromPairs,
  every,
  some,
  difference,
  isEqual,
  differenceWith,
  dropRight,
  fill,
  findIndex,
  findLastIndex,
  head,
  flatten,
  forEach,
  fromPairs,
  indexOf,
  initial,
  intersection,
  join,
  last,
  nth,
  pull,
  pullAllWith,
  pullAt,
  remove,
  reverse,
  slice,
  sortedIndex,
  sortedIndexBy,
  sortedLastIndexOf,
  sortedIndexOf,
  sortedLastIndex,
  sortedLastIndexOf,
  sortedUniq,
  sortedUniqBy,
  tail,
  take,
  takeRight,
  takeRightWhile,
  takeWhile,
  union,




}


function chunk(array, size) {
  result = [];
  arr = [];
  if (array.length > size) {
    arr = array.splice(0, size);
    result.push(arr);
  }
  arr = array.slice(0);
  result.push(arr);
  return result;
}

function compact(array) {
  var result = [];
  array.forEach(function (item) {
    if (!(item == 'false' || item != item || item == 0 || item == 'null' || item == 'undefinde' || item == '')) {
      result.push(item);
    }
  });
  return result;
}

function concat(array, ...value) {
  var result = [];
  result.push(...array);
  for (var i = 0; i < value.length; i++) {
    if (Array.isArray(value[i])) {
      result.push(...value[i]);
    } else {
      result.push(value[i]);
    }
  }
  return result;
}


// function flattenDeep(array) {
//   var result = [];
//   return reduce(array, function (result, item) {
//     if (Array.isArray(item)) {
//      var flattenitem=flattenDeep(item);
//      result.push(...flattenitem);
//     } else {
//       result.push(item);
//     }
//     return result;
//   }, null)
// }


function reduce(collection, iteratee, accumulator) {
  if (Array.isArray(collection)) {
    var result
    if (accumulator == undefined) {
      result = collection[0];
    } else {
      result = collection[0] + accumulator;
    }
    for (var i = 1; i < collection.length; i++) {
      result = iteratee(result, collection[i]);
    }
    return result;
  } else {
    var result = {};
    if (accumulator == undefined) {
    }
    for (var key in collection) {
      result = iteratee(result, collection[key], key);
    }
  } return result;
}

//键值对数组转化成对象
function fromPairs(pairs) {
  var result = {};
  for (var i = 0; i < pairs.length; i++) {
    result[pairs[i][0]] = pairs[i][1];
  }
  return result;
}

// function bind(f) {
//   var
// }

//前n次调用原函数
function before(n, func) {
  var i = 0;
  var result;
  return function (...args) {
    if (i < n) {
      return result = func(...args);
      i++;
    }
    else {
      return result;
    }
  }
}

//调用n次之后调用原函数
function after(n, func) {
  var i = 0;
  var result;
  return function (...args) {
    if (i >= n) {
      return result = func(...args);
      i++;
    }
  }
}

//调用时直接收n个参数
function ary(func, n = func.length) {
  return function (...args) {
    return func(...args.slice(0, n))
  }
}

//调用时直接一个参数
function unary(func, n = func.length) {
  return function (arg) {
    return func(arg)
  }
}

//翻转参数
function flip(func) {
  return function (...args) {
    return func(...args.reverse());
  }
}

//返回函数的取反值
function negate(func) {
  return function (...args) {
    return !func(...args);
  }
}

function spread(func) {
  return function (ary) {
    return func(...ary)
  }
}

// function bind(f, ...fixedArgs) {
//   return function (...args) {
//     var copy = fixedaArgs.slice();
//     var j = 0;
//     for (var i = 0; i < copy.length; i++) {
//       if (copy[i] == null) {
//         copy[i] = args[j];
//         j++;
//       }
//       while (j < args.length) {
//         copy.push(args[j++]);
//       }
//     }
//     return f(...copy);
//   }
// }


function fromPairs(pairs) {
  var result = {};
  for (var i = 0; i < pairs.length; i++) {
    result[pairs[i][0]] = pairs[i][1];
  }
  return result;
}

function difference(array, values) {
  var values1 = {};
  for (var i = 0; i < values.length; i++) {
    values1[values[i]] = 1;
  }
  for (var j = 0; j < array.length; j++) {
    if (array[j] in values1) {
      array.splice(j, 1);
    }
  }
  return array;
}

//排除相同
function differenceWith(array, values, func) {
  for (var j = 0; j < array.length; j++) {
    if (func(array[j], ...values)) {
      array.splice(j, 1);
    }
  }
  return array;
}

// function differenceBy(array, values, iteratee) {
//   if (typeof (iteratee) == "function") {
//     array.forEach(iteratee(item));
//     values.forEach(iteratee())
//   } else {
//     for (var j = 0; j < array.length; j++) {
//       if (func(array[j], ...values)) {
//         array.splice(j, 1);
//       }
//     }
//   }
//   return array;
// }

//判断相同
function isEqual(value, other) {
  if (typeof (value) !== typeof (other)) {
    return false;
  } else if (typeof (value) != "object" && typeof (other) != "object") {
    if (value === other) {
      return true;
    }
  } else {
    if (Array.isArray(value) && Array.isArray(other)) {
      if (value.toString() === other.toString()) {
        return true;
      } else {
        return false;
      }
    } else {
      var keys1 = Object.keys(value);
      var keys2 = Object.keys(other);
      if (keys1.toString() !== keys2.toString()) {
        return false;
      } else {
        for (var i = 0; i < keys1.length; i++) {
          if (value[keys1[i]] != other[keys2[i]]) {
            return false;
          }
        }
        return true;
      }
    }
  }
  return false;
}
function drop(array, n) {
  return array.slice(array.length - n);
}

function dropRight(array, n) {
  if (n == undefined) {
    n = 1;
  }
  else if (n >= 3) {
    return [];
  }
  return array.slice(0, array.length - n);
}

function fill(array, value, start = 0, end = array.length) {
  for (var i = start; i < end; i++) {
    array[i] = value;
  }
  return array;
}

function findIndex(array, predicate, fromIndex = 0) {
  for (var i = fromIndex; i < array.length; i++) {
    if (predicate(array[i])) {
      return i;
    }
  }
  return -1;
}

//从数组尾部开始查找
function findLastIndex(array, predicate, fromIndex = array.length - 1) {
  for (var i = fromIndex; i >= 0; i--) {
    if (predicate(array[i])) {
      return i;
    }
  }
  return -1;
}

//取出数组第一个元素
function head(array) {
  return array.shift();
}
//展开一层数组
function flatten(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var j = 0; j < array[j]; j++) {
        result.push(array[i][j]);
      }
    }
    result.push(array[i]);
  }
  return result;
}

//遍历数组或对象
function forEach(collection, func) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      func(collection[i]);
    }
  } else {
    for (var key in collection) {
      func(collection[key], key);
    }
  }
}

//查找目标元素下标
function indexOf(array, value, fromIndex = 0) {
  if (fromIndex >= 0) {
    for (var i = fromIndex; i < array.length; i++) {
      if (array[i] == value) {
        return i;
      }
    }
  } else {
    for (var i = array.length + fromIndex; i >= 0; i--) {
      if (array[i] == value) {
        return i;
      }
    }
  }
  return -1
}
function lastIndexOf(array, value, fromIndex = array.length - 1) {
  for (var i = fromIndex; i >= 0; i--) {
    if (array[i] == value) {
      return i;
    }
  } return -1;
}
//除去数组最后一个元素
function initial(array) {
  return array.slice(0, array.length - 1);
}
//获取各数组的相同元素
// function intersection(...arrays) {
//   var result = arrays[0];
//   reduce(array, function (result, item) {
//     for (var i = 0; i < result.length; i++) {
//       for (var j = 0; j < item.length; j++) {
//         if(result[i]==item[j]){

//         }
//       }
//     }
//   }, []);
// }

function join(array, separator = ',') {
  var result = '';
  for (var i = 0; i < array.length - 1; i++) {
    result += array[i] + separator;
  }
  result += array[array.length - 1];
  return result;
}
function last(array) {
  return array[array.length - 1];
}
function nth(array, n = 0) {
  if (n >= 0) {
    return array[n];
  } else {
    return array[array.length + n];
  }
}
//删除数组中的目标值
function pull(array, ...values) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < values.length; j++) {
      if (array[i] == values[j]) {
        array.splice(i, 1);
      }
    }
  }
  return array;
}

function pullAll(array, values) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < values.length; j++) {
      if (array[i] == values[j]) {
        array.splice(i, 1);
      }
    }
  }
  return array;
}

function pullBy(array, values, iteratee) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < values.length; j++) {
      if (iteratee(array[i]) == iteratee(values[j])) {
        array.splice(i, 1);
      }
    }
  }
  return array;
}

function pullAllWith(array, values, comparator) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < values.length; j++) {
      if (comparator(array[i], values[j])) {
        array.splice(i, 1);
      }
    }
  }
  return array;
}

function pullAt(array, ...indexes) {
  var result = [];
  for (var i = 0; i < indexes.length; i++) {
    result.push(array[indexes[i] - i]);
    array.splice(indexes[i] - i, 1);
  }
  return result;
}

function remove(array, predicate) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      result.push(array[i]);
      array.splice(i, 1);
      i--;
    }
  }
  return result;
}

function reverse(array) {
  var l = array.length;
  for (var i = 0; i < Math.floor(l / 2); i++) {
    var a;
    a = array[i];
    array[i] = array[l - i - 1];
    array[l - i - 1] = a;
  }
  return array;
}

function slice(array, start = 0, end = array.length) {
  var result = [];
  for (var i = start; i < end; i++) {
    result.push(array[i]);
  }
  return result;
}

function sortedIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (value <= array[i]) {
      return i;
    }
  } return i;
}

// function sortedIndexBy(array, value, iteratee) {

//   for (var i = 0; i < array.length; i++) {
//     if (typeof (iteratee) == "function") {
//       if (iteratee(value) < array[i]) {
//         return i;
//       }
//     }

//   } return i;
// }
function sortedIndexOf(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (value == array[i]) {
      return i;
    }
  }
}

function sortedLastIndex(array, value) {
  for (var i = array.length - 1; i >= 0; i--) {
    if (value >= array[i]) {
      return i + 1;
    }
  }
  return 0;
}

function sortedLastIndexOf(array, value) {
  for (var i = array.length - 1; i >= 0; i--) {
    if (array[i] == value) {
      return i;
    }
  }
  return -1;
}

function sortedUniq(array) {
  if (array.length <= 1) {
    return [];
  }
  var result = [array[0]];
  var j = 0;
  for (var i = 1; i < array.length; i++) {
    if (result[j] != array[i]) {
      result.push(array[i]);
      j++;
    }
  }
  return result;
}

function sortedUniqBy(array, iteratee) {
  if (array.length <= 1) {
    return [];
  }
  var result = [array[0]];
  var j = 0;
  for (var i = 1; i < array.length; i++) {
    if (iteratee(result[j]) != iteratee(array[i])) {
      result.push(array[i]);
      j++;
    }
  }
  return result;
}

function tail(array) {
  return array.slice(1);
}

function take(array, n = 1) {
  if (n > array.length) {
    n = array.length;
  } else if (n == 0) {
    return [];
  }
  return array.slice(0, n);
}

function takeRight(array, n = 1) {
  if (n == 0) {
    return [];
  } else if (n >= array.length) {
    return array;
  }
  return array.slice(array.length - n);
}

function takeRightWhile(array, predicate) {
  var result = [];
  for (var i = array.length - 1; i >= 0; i--) {
    if (typeof (predicate) == "string") {
      if (!(predicate in array[i])) {
        result.unshift(array[i]);
      }
    } else if (typeof (predicate) == "function") {
      if (predicate(array[i])) {
        result.unshift(array[i]);
      }
    } else if (Array.isArray(predicate)) {
      var count = 0;
      for (var key in array[i]) {
        if (predicate[0] in array[i] && (array[i][predicate[0]] == predicate[1])) {
          count++;
        }
      }
      if (Object.keys(array[i]).length == count) {
        result.unshift(array[i]);
      }
    } else if (predicate.constructor === Object) {
      var count = 0;
      for (var key in predicate) {
        if ((key in array[i]) && (predicate[key] == array[i][key])) {
          count++;
        }
      } if (Object.keys(array[i]).length == count) {
        result.unshift(array[i]);
      }
    }
  }
  return result;
}

function takeWhile(array, predicate) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof (predicate) == "string") {
      if (!(predicate in array[i])) {
        result.push(array[i]);
      }
    } else if (typeof (predicate) == "function") {
      if (predicate(array[i])) {
        result.push(array[i]);
      }
    } else if (Array.isArray(predicate)) {
      var count = 0;
      for (var key in array[i]) {
        if (predicate[0] in array[i] && (array[i][predicate[0]] == predicate[1])) {
          count++;
        }
      }
      if (Object.keys(array[i]).length == count) {
        result.push(array[i]);
      }
    } else if (predicate.constructor === Object) {
      var count = 0;
      for (var key in predicate) {
        if ((key in array[i]) && (predicate[key] == array[i][key])) {
          count++;
        }
      } if (Object.keys(array[i]).length == count) {
        result.push(array[i]);
      }
    }
  }
  return result;
}

function union(...arrays) {
  var ary = [...arrays[0]];
  var result = {};
  for (var e = 0; e < ary.length; e++) {
    result[ary[e]] = 1;
  }
  for (var i = 1; i < arrays.length; i++) {
    for (var j = 0; j < arrays[i].length; j++) {
      if (!(arrays[i][j] in result)) {
        result[arrays[i][j]] = 1;
      }
    }
  }
  for (var key in result) {

  }
  return Object.keys(result).map(Number);
}

function unionBy(...arrays, iteratee) {
  var ary = [iteratee(...arrays[0])];
  var result = {};
  for (var e = 0; e < ary.length; e++) {
    result[ary[e]] = 1;
  }
  for (var i = 1; i < arrays.length; i++) {
    for (var j = 0; j < arrays[i].length; j++) {
      if (!(arrays[i][j] in result)) {
        result[arrays[i][j]] = 1;
      }
    }
  }
  for (var key in result) {

  }
  return Object.keys(result).map(Number);
}

function union(...arrays) {
  var result = [...arrays[0]];
  for (var i = 0; i < arrays.length; i++) {
    reduce(arrays, function (result, arrays[i], idx) {
      for (var i = 0; i < result.length; i++) {

      }
    }, result);
  }

}