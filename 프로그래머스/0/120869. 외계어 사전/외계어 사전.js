const solution = (spell, dic) => {

  for(const word of dic){

    let hasIndex = true;

    for(const char of spell){
      if(word.indexOf(char) === -1){
        hasIndex = false;
        break;
      }
    }
    if(hasIndex && word.length === spell.length) return 1;
  }
  return 2;
}
