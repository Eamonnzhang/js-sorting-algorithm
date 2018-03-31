const Utils = require('./Utils');

let testArr = Utils.readDbFile();

const partition = (arr, low, high) => {
    // 取第一个数值作为基准值
    let pivot = arr[low];
    // low为0，high为n-1，开始前后执行
    while (low < high) {
        // 从high往前，如果high的值比关键值大，就一直往前找，high值不断减少
        while (low < high && arr[high] > pivot) {
            --high;
        }
        // 如果high位置的值比关键值小或者high<=low,让arr[low] = arr[high]
        arr[low] = arr[high];
        while (low < high && arr[low] <= pivot) {
            ++low;
        }
        // 如果low位置的值比关键值大或者high>=low,让arr[high] = arr[low]
        arr[high] = arr[low];
    }
    arr[low] = pivot;
    // 把新的low值返回出去，用于下一次的基准位置
    return low;
}

const quickSort = (arr, low, high) => {
    if (low < high) {
        let pivot = partition(arr, low, high);
        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
    }
    return arr;
}

let sortedArr = quickSort(testArr, 0, testArr.length - 1);

console.log(sortedArr);