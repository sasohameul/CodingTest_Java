const solution = (num, k) => {

    const answer = num.toString()
                      .split('')
                      .findIndex(elem => elem == k)+1;

    return answer > 0 ? answer : -1;
}