const solution = (n) => {
    let answer = [];

    let first = n;
    let num = 2;

    while(first >= num){

      if(n % num === 0) {

        n /= num;
        answer.push(num);
      } else num++;

    }
    const set = new Set(answer);
    answer = [...new Set(answer)];

    return answer;
}