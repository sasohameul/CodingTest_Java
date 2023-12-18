const solution = (num, k) => {

        const result = num.toString().indexOf(k)+1;

return result == 0 ? -1 : result;

}