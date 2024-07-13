function sortArray(array, option) {
    let sorted = option === 'asc' ? array.sort((a, b) => a - b) : array.sort((a, b) => b - a);
    return sorted

}
sortArray([14, 7, 17, 6, 8], 'asc')