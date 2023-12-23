const solution = (array) =>  {

    const answer = array.map(num => {

        let seven = 0;
        const arr = String(num).split('').map(n => {Number(n) === 7 ? seven++ : 0; return seven})

        return seven;
    }).reduce((prev,cur) => prev+cur);

    return answer;
}