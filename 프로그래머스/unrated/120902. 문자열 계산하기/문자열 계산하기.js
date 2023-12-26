const solution = (my_string) => {

const answer = my_string.split(' ').reduce((prev, cur, idx, arr) => {
    if (!isNaN(cur)) {
        const num = Number(cur);

        if (idx === 0 || arr[idx - 1] === '+') {
            prev += num;
        } else if (arr[idx - 1] === '-') {
            prev -= num;
        }
    }

    return prev;
}, 0);

return answer;


};