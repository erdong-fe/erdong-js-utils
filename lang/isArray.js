function isArray (arr) {
    return Object.prototype.call(arr) === '[Object array]';
}

export default isArray;
