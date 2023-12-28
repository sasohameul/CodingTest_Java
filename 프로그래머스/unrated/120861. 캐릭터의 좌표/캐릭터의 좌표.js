const solution = (keyinput, board) => {

  const answer = keyinput.reduce((prev,cur) => {

    let next = [...prev];

    if(cur === 'up') next[1] += 1;
    else if(cur === 'down') next[1] -= 1;
    else if(cur === 'left') next[0] -=1;
    else next[0] += 1;

    if(Math.abs(next[0]) > board[0]/2 || Math.abs(next[1]) > board[1]/2 ) return prev;
    
    return next;

  }, [0,0])

  console.log(answer);

    return answer;
}