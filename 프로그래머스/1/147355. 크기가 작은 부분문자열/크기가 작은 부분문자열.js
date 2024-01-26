const solution = (t, p) =>{
     let answer = 0;
    const len = t.length-p.length+1;

      for(let j = 0; j < len; j++){
        const element = t.slice(j, j + p.length);
        if(element <= p) answer++;
      }

    return answer;
}