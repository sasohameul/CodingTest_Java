const solution = (i, j, k) => {
    let answer = 0;
    
    const arr = Array.from({length:(j-i)+1}, (_,idx) => i+idx)
                      .forEach(num => {

                        String(num).split('').forEach(n => {

                          if(n === k.toString()) answer++;
                        })
                            
                        });
                                                
    return answer;
}
