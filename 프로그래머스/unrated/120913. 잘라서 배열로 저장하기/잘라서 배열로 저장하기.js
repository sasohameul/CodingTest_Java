const solution = (my_str, n) => {
    var answer = [];

    for(let i = 0,idx = n, j = 0; i < my_str.length/n; i++,idx+=n, j+=n){

           answer.push(my_str.slice(j,idx)); 
    }

    return answer;
}