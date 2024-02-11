const solution = (s, n) => {
    const answer = s.split('').map(char => {

    let code = char.charCodeAt();

    if(code >= 65 &&  code <= 90) return String.fromCharCode((code-65+n) % 26 + 65);
    else if(code >= 97 && code <= 122 ) return String.fromCharCode((code-97+n) % 26 + 97);

    return char;

  }).join('');

  return answer;
}