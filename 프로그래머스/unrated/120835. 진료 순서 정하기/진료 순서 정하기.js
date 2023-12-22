const solution= emergency => {
    
     let order = Array.from([...emergency]);
    order.sort((a,b)=> b-a);
    const answer = [];
    
    const result  = emergency.map((patient,idx)=> {
      for(let i = 0; i < order.length; i++){
            if(patient === order[i]) answer.push(i+1);
      }
      return answer;
    })

    return result[0];
    
}