const {
    findMean,
    findMedian,
    findMode,
} = require("./helpers");

describe("#findMedian", function () {
    it("finds the median of an even set", function () {
        expect(findMedian([1, -1, 4, 2])).toEqual(1.5)
    })
    it("finds the median of an odd set", function () {
        expect(findMedian([1, -1, 4])).toEqual(1)
    })
})

describe("#findMode", function () {
    it("finds the number that occurs the most frequently", function () {
        expect(findMode([1, 1, 1, 2])).toEqual(1)
    })
})


describe("findMean", function () {
    it("adds all numbers in array and determines their average value", function () {
        expect(findMean([1, 1, 1, 2])).toEqual(1.25)
    })
    it("returns 0 when there are no numbers in the array", function () {
        expect(findMean([])).toEqual(0)
    })
})