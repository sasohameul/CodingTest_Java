function solution(sides) {
     var answer = 0;

  var max = 0;
  let cnt = 0;
  for(var i = 0; i < sides.length; i++){

    if(sides[i] > max) {
      cnt = i;
      max = sides[i];
    }
  }

  for(let i = 0; i < sides.length; i++){

    if(i != cnt) answer += sides[i];
  }

  return answer > max ? 1 : 2;
}