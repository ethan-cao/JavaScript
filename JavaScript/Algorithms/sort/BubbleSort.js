
const sort = (data) => {
    for (let i = 0; i < data.length - 1; ++i) {
        for (let j = 0; j < data.length - 1 - i; ++j)  {
            if (data[j] > data[j+1]){
                [data[j], data[j+1]] = [data[j+1], data[j]];
            }
        }
    }
}

const data = [2,1,3,5,4];
sort(data);
console.log(data);