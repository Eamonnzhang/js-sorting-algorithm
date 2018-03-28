const Utils = require('./Utils');

let testArr = Utils.readDbFile();

const bubbleSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            // 比较相邻两个位置的值，如果j位置比j+1位值大，就交换位置
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr;
}

let sortedArr = bubbleSort(testArr);
console.log(sortedArr);