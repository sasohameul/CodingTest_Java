const solution = (hp) => {
    
    let answer = 0;

   for(let i = 0; i < 3; i++){

    if(i == 0) {
      answer = Math.floor(hp / 5);
      hp %= 5;
    } else if(i == 1){
      answer += Math.floor(hp / 3);
      hp %= 3;
    } else {
      answer += hp;
    }

   }

  return answer;
}