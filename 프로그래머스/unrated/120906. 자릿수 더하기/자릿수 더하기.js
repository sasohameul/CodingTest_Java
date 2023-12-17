const solution = (n) => {
    let num = n + '';
    let answer = 0;

      const sum = num.split('').forEach(n => answer+=Number(n));

    return answer;
}