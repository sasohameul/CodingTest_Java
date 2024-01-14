const solution = (score) => {

    const result = score.map(num =>{

       const [eng, math] = num;

       const avg = (eng+math)/2;

      return avg;

      }).map((num,idx,arr)=>{

        let rank = 1;
        for(let i = 0; i < arr.length; i++){

          if(num < arr[i]) rank++;

        }

        return rank;
      })

    return result;
}