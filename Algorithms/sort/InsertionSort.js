
const sort = (data) => {
    for (let i = 0; i < data.length; ++i) {
        for (let j = i; j > 0; --j) {
            if (data[j] < data[j-1]) {
                [data[j], data[j-1]] = [data[j-1], data[j]];
            } else {
                break;
            }
        }
    }
}

const data = [2,1,3,5,4];
sort(data);
console.log(data);