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

function flattenDeep(array) {
  var result = [];
  array.forEach(function (item) {
    if (Array.isArray(array)) {
      flattenDeep(item);
    } else {
      result.push(item);
    }
  });
  return result;
}

function bind(f) {
  var
}

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

function dropRightWhile(array, [predicate = _.identity]) {

}