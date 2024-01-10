const solution = (quiz) => {

  const answer  = quiz.map(item => {
    
    let sum = 0;
    
    const result = item.split(' ').reduce((prev,cur,idx,arr)=>{
       
      if(cur === '-') {
         
          sum = arr[idx-1] - arr[idx+1];
          
        } else if (cur === '+') {
          
          sum = Number(arr[idx-1]) + Number(arr[idx+1]);
        } else if (cur === '='){
         
        if(sum === Number(arr[idx+1])) prev='O';
        else prev='X';
        }
       
          return prev;

      },'')

return result

    });

    return answer;
}