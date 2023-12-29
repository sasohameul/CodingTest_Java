const solution = (A, B) => {
    let answer = 0;

    const arr = A.split('');

    for(let i = 0; i < arr.length+1; i++){
      
      if(arr.join('') === B) break; 
      arr.unshift(arr.pop());
      answer++;
    }
    
    return answer > arr.length ? -1 : answer;
}