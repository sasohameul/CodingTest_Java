const solution = (my_string) => {
    let answer = 0;

    const result = my_string.split('').filter(a => {
      
      const num = !isNaN(Number(a));

      return num;
    }).map(a => answer+=Number(a));

    return answer;
}