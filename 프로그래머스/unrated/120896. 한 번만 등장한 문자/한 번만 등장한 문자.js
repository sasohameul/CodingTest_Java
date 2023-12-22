const solution = s => {
  let answer = '';
   const result = s.split('').reduce((prev,cur,idx,arr) => {
     
    let cnt = 0;
     for(let i = 0; i < arr.length; i++){
       
       if(arr[i] == cur) cnt++;
       
      }
      
       if(cnt == 1) answer += cur;
       return answer.trim();
       
      },'');
      
    return result.split('').sort().join('');

}