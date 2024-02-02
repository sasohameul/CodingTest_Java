const solution = (participant, completion) => {

  const count = {};

  completion.forEach(name => {

    if(count[name]) count[name] += 1;
    else count[name] = 1;

  });

  for(let i = 0; i < participant.length; i++){
    const name = participant[i];
    if(!count[name] || count[name] === 0){
      return name;
    }
    count[name] -= 1;
  }

}