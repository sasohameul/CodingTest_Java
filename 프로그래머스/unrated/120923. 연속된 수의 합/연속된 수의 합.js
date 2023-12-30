const solution = (num, total) => {
  
  let sum = 0;
  
  for(let i = 1; i < num; i++){
    
      sum += i; 

    }
    
    let real = total - sum;
    
    let start = real / num;
    
    const answer = Array.from({length: num}, (_,i)=>start+i);

    return answer;
}
