const solution = (age) => {

  const old = ['a','b','c','d','e','f','g','h','i','j'];

  const result = String(age).split('')
                            .map(num => old[parseInt(num,10)])
                            .join('');
    
    return result;
}