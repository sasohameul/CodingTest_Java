function solution(s1, s2) {
     const result = s1.filter( r => s2.includes(r));
  
  return result.length;
}