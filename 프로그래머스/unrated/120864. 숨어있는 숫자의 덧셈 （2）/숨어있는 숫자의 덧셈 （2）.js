const solution = (my_string) => {
    
    return  my_string.split(/[^0-9]/g)
                     .filter(str => !isNaN(str) ? str : '')
                     .reduce((prev,cur) => {
        return Number(prev) + Number(cur)
    },0);
}