// You should implement your task here.

const isOddNumber = (index) => {
    return index === 1 || index % 2 === 1;
};

module.exports = function towelSort(matrix) {
    if (!Array.isArray(matrix)) {
        return [];
    }
    if (matrix.length === 0) {
        return [];
    }

    matrix.forEach((item, index) => {
        if (isOddNumber(index)) {
            item.reverse();
        }
    });

    const newArray = matrix.join(",").split(",");
    const array = newArray.map((item) => {
        return parseInt(item);
    });
    // if (matrix.length === 0 || arguments.length === 0) {
    //     return [];
    // }
    return array;
};
