const solution = (polynomial) => {
    
    const answer = polynomial.split(' + ').reduce((acc, cur) => {
        
        if (cur.includes('x')) {
            const x = cur.replace('x', '') || '1'; 
            acc.xSum += Number(x); 
        } else {
            acc.numSum += Number(cur); 
        }
        
        return acc; 
    }, {xSum: 0, numSum: 0}); 
    
    let result = [];
    if(answer.xSum !== 0) {
      result.push(`${answer.xSum === 1 ?  '' : answer.xSum}x`);
    } 
    if(answer.numSum !== 0) {
      result.push(`${answer.numSum}`);
    }

    return result.join(' + ');
}