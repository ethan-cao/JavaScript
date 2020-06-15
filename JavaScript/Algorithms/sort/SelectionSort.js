
const sort = (data) => {
	for (let i = 0; i < data.length; ++i) {
        for (let j = i + 1; j < data.length; ++j) {
            if (data[i] > data[j]) {
                [data[i], data[j]] = [data[j], data[i]];
            }
        }
	}
};

const data = [2,1,3,5,4];
sort(data);
console.log(data);