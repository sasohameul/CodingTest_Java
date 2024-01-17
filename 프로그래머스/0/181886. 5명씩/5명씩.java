class Solution {
    public String[] solution(String[] names) {
        int len = names.length%5 == 0 ?  names.length/5 : (int)Math.ceil(names.length/5)+1;
    String[] answer = new String[len];
    
    for(int idx =0,i = 0; idx < answer.length; i+=5) {
    	
    	answer[idx++] = names[i];
    	
    }
    
    return answer;
    }
}