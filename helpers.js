function findMean(nums) {
    if (nums.length === 0) return 0;
    return nums.reduce(function (acc, curr) {
        return acc + curr
    }) / nums.length
}

function findMedian(nums) {
    if (nums.length === 0) {
        return null;
    }
    nums.sort(function (a, b) {
        return a - b;
    });

    let middleIndex = Math.floor(nums.length / 2);
    let median;

    if (nums.length % 2 === 0) {
        return (nums[middleIndex - 1] + nums[middleIndex]) / 2;
    } else {
        median = nums[middleIndex];
    }
    return median;
}

function findMode(nums) {
    if (nums.length === 0) {
        return null;
    }

    let freqCounter = {};
    let frequency = 0;
    let mode = null;

    nums.forEach(function (num) {
        freqCounter[num] = (freqCounter[num] || 0) + 1;

        if (freqCounter[num] > frequency) {
            frequency = freqCounter[num];
            mode = num;
        }
    });
    return mode;
}

function convertAndValidateNumsArray(numsAsStrings) {
    let result = [];

    for (let i = 0; i < numsAsStrings.length; i++) {
        let valToNumber = Number(numsAsStrings[i]);

        if (Number.isNaN(valToNumber)) {
            return new Error(
                `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
            );
        }

        result.push(valToNumber);
    }
    return result;
}

module.exports = {
    findMean,
    findMedian,
    findMode,
    convertAndValidateNumsArray,
};