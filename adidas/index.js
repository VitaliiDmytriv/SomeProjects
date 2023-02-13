// function printNumbers(from, to) {
//     // let timerId = setTimeout(function tick() {
//     //     if (from <= to) {
//     //         alert(from++);
//     //         timerId = setTimeout(tick, 1000);
//     //     } else {
//     //         clearTimeout(timerId);
//     //     }
//     // }, 1000);
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
