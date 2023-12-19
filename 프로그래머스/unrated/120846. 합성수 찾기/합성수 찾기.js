const solution = (n) => {
    let arr = [];
  for(let i = 2; i <= n; i++){

    let num = new Set();
        for(let j = 1; j <= i; j++){

          if(i % j == 0) num.add(j);
        }

        if(num.size >= 3) arr.push(i);
      }

    return arr.length;
}