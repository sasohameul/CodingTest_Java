const solution = (numbers, direction) => {

  const answer =  direction === 'right' ? [numbers[numbers.length-1], ...numbers].slice(0,numbers.length)
                                          :
                                          [...numbers,numbers[0]].slice(1,numbers.length+1);

    return answer;
}