// function printNumbers(from, to) {
//     let timerId = setTimeout(function tick() {
//         if (from <= to) {
//             alert(from++);
//             timerId = setTimeout(tick, 1000);
//         } else {
//             clearTimeout(timerId);
//         }
//     }, 1000);
// }

// printNumbers(2, 5);

// ========================================= Кешування!

function multiplic(x) {
  return Math.pow(x, 3);
}

function cachingDecorator(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      console.log("get from cache");
      return cache.get(x);
    }

    let result = func(x);
    console.log("get from function calculation");
    cache.set(x, result);
    return result;
  };
}

let getRes = cachingDecorator(multiplic);

console.log(getRes(2));
console.log(getRes(5));
console.log(getRes(5));

function zero(x) {
  return x === undefined ? 0 : Math.floor(eval(0 + x));
}

function one(x) {
  return x === undefined ? 1 : Math.floor(eval(1 + x));
}
function two(x) {
  return x === undefined ? 2 : Math.floor(eval(2 + x));
}
function three(x) {
  return x === undefined ? 3 : Math.floor(eval(3 + x));
}
function four(x) {
  return x === undefined ? 4 : Math.floor(eval(4 + x));
}
function five(x) {
  return x === undefined ? 5 : Math.floor(eval(5 + x));
}
function six(x) {
  return x === undefined ? 6 : Math.floor(eval(6 + x));
}
function seven(x) {
  return x === undefined ? 7 : Math.floor(eval(7 + x));
}
function eight(x) {
  return x === undefined ? 8 : Math.floor(eval(8 + x));
}
function nine(x) {
  return x === undefined ? 9 : Math.floor(eval(9 + x));
}

function plus(x) {
  return `+${x}`;
}
function minus(x) {
  return `-${x}`;
}
function times(x) {
  return `*${x}`;
}
function dividedBy(x) {
  return `/${x}`;
}

console.log(seven(times(five())));
