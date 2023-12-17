const solution = (my_string) => {

    const result = my_string.split('').map(ch => {

      const change = ch.charCodeAt(0) >=97 ? ch.toUpperCase() : ch.toLowerCase();

      return change;

    }).join('');

    return result;
}