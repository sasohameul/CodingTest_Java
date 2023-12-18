const solution = (cipher, code) => {

    let answer = cipher.split('').reduce((prev, cur,idx) => {
     
        if((idx+1) % code == 0) prev+=cur;

        return prev;
    
    },'');

    return answer;
}