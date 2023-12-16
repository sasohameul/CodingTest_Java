function solution(my_string) {
    
    const remove = 'aeiou';
    
    const result = my_string.split('').filter(str => (!remove.includes(str))).join('');
    
    return result;
}