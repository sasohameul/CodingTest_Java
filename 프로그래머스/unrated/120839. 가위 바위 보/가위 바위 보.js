const solution = (rsp) => {

    const result = rsp.split('').map(a => {

      const answer = a == '2'? '0' : a == '0' ? '5' : '2';
      return answer;

    }).join('');
    return result;
}