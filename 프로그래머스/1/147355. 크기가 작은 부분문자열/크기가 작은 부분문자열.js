const solution = (t, p) =>{
    let answer = [];
    const len = t.length-p.length+1;

      for(let j = 0; j < len; j++){
        const element = t.slice(j, j + p.length);
        answer.push(element);
      }

      const result = answer.filter((el)=>el <= p);

    return result.length;
}