const solution = (s) => {

    const answer = s.split(' ').map((str,idx)=> {
    console.log(str);
    console.log(idx);

    let result = '';

      for(let i = 0; i < str.length; i++){

        if(i % 2 === 0) result += str[i].toUpperCase();
        else result += str[i].toLowerCase();

      }

      console.log(result);

    return result;

  }).join(' ');

    return answer;
}