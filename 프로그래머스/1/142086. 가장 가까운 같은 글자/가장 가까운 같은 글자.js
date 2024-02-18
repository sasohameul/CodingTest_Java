const solution = (s) => {
   const answer = [...s].map((char, idx) => {

      const index = s.slice(0,idx).lastIndexOf(char);

      return index < 0 ? index : idx - index;
 });
    return answer;
}
