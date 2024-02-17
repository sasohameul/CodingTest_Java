const solution = (s) => {

   const answer = s.split('').map((spell,idx,arr) => {

    if(idx === 0) return -1;
    else {
      for(let i = idx-1; i >= 0; i-- ){
        if(arr[i] === spell){
          return idx-i;
        } 
      }
      return -1;
    }

  });

    return answer;
}