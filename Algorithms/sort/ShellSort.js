const sort = (data) => {
	let h = 1;
	while (h < Math.floor(data.length / 3)) {
		h = 3 * h + 1;
	}

	while (h >= 1) {
		for (let i = h; i < data.length; ++i) {
			for (let j = i; j - h >= 0; j -= h) {
				if (data[j - h] > data[j]) {
					[data[j - h], data[j]] = [data[j], data[j - h]];
				} else {
					break;
				}
			}
		}

		h /= 3;
	}
};

const data = [2,1,3,5,4];
sort(data);
console.log(data);
