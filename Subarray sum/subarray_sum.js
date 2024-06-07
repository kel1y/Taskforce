function subarraySum(arr, target) {
    let count = 0;
    let pointer = 0;

    for (let index = 0; index < arr.length; index++) {
        count += arr[index];

        if (count === target) {
            return true;
        }

        while (count > target) {
            count -= arr[pointer];
            pointer += 1;

            if (count === target) {
                return true;
            }
        }
    }

    return false;
}

console.log(subarraySum([4, 2, 7, 1, 9, 5], 17))

console.log(subarraySum([1, 3, 2, 5, 1, 1, 2, 3], 8))

console.log(subarraySum([3, 5, 1, 9, 3, 1, 1], 2))

console.log(subarraySum([], 2))