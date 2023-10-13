function sortArrayDescending(arr) {
    const length = arr.length;

    for (let i = 0; i < length - 1; i++) {
        let maxIndex = i;

        for (let j = i + 1; j < length; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }

        [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
    }

    return arr;
}

const originalArray = [5, 2, 8, 1, 4];
const sortedArray = sortArrayDescending(originalArray);
console.log("Sorted array in descending order:", sortedArray); // Output: [8, 5, 4, 2, 1]