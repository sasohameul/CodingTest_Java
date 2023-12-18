const solution = (my_string)=> {

  const result = my_string.split('')
                        .filter((elem) => !isNaN(elem))
                        .sort()
                        .map(str => parseInt(str,10));
                        

    return result;
}