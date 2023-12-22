const solution = (s) => {

   const answer =  s.split(' ').map((num,idx,arr) => {
        
        let sum = 0;
        if(num === 'Z') sum -= Number(arr[idx-1]);
        else sum += Number(num); 
        return sum;
    }).reduce((prev,cur)=> (prev+cur));

    return answer;
}
