const solution = (s) => {
     const numericRegex = /^[0-9]+$/;
  
  return (s.length === 4 || s.length === 6) && numericRegex.test(s);
}