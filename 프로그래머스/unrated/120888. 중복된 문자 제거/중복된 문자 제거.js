const solution = (my_string) => {

  const only = my_string.split('')
                        .filter((str,idx,arr) => arr.indexOf(str) === idx).join('');

      return only;
}
