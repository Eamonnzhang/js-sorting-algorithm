const Utils = require('./Utils');

let testArr = Utils.readDbFile();

const selectionSort = (arr) => {
    let len = arr.length;
    let minIndex, temp;
    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        // 从第i个值开始
        for (let j = i + 1; j < len; j++) {
            // 拿第i个值开始往后比较，记录最小的值的索引
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // 把最小值替换到第i个位置
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
let sortedArr = selectionSort(testArr);
console.log(sortedArr);