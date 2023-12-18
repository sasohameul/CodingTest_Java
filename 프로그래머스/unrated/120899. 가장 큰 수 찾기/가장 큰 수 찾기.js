const solution = (array) => {
  
  let max = 0;
  let index = 0;

   array.map((elem,idx) => {
            
      if(elem > max) {
        max = elem;
        index = idx;
      }
      
    });

    return [max, index];
}