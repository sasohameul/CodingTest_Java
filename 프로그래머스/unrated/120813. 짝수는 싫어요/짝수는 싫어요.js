function solution(n) {
    var answer = [];
    
    for(var i = 1, idx = 0; i <= n; i+=2 ){
        
        answer[idx++] = i;
    }
    
    return answer;
}