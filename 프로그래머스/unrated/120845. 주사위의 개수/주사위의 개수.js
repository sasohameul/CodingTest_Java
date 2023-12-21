const solution = (box, n) => {
    
 const answer =  box.reduce((prev,cur) => {
     return prev *= Math.floor(cur / n);
 },1)

    return answer;
}