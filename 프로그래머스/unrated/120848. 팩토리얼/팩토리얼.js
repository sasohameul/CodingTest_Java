const solution = (n) => {

  let answer = 1;
  let num = 1;

      for(let i = 1; i <= 10; i++){

          answer *= i

          if(answer >= n) {
            num = i;
            break;
          }
      }

  return answer > n ? num-1 : num;

}