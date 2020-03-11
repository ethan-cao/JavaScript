const sentences = [
    "1+1=1",
    "2+2=4",
    "3+3=6",
    "1+1=1"
];

console.log(sentences)

for (let [index1, s1] of sentences.entries()){

    for (let [index2, s2] of sentences.entries()){
        if (index1 === index2) {
            continue;
        }

        if (s1 === s2) {
            sentences.splice(index2, 1);
        }
    }
}

console.log(sentences)