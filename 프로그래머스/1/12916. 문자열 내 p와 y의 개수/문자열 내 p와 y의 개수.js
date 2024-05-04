const solution = (s) => {

   const pCount = s.toLowerCase()
                   .split('')
                   .filter((alphabet) => alphabet === 'p')
                   .length;
    
    const yCount = s.toLowerCase()
                    .split('')
                    .filter((alphabet) => alphabet === 'y')
                    .length;
    
        return pCount === yCount;
}