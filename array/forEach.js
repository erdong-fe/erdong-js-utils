import isArray from '../lang/isArray';

function forEach(arr, cb) {
    if (!isArray(arr)) {
        console.error('')
    }
    for (let index = 0; index < arr.length; index++) {
        cb(arr[index], index);
    }
}

export default forEach;
