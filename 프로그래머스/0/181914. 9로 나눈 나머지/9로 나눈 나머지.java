class Solution {
    public int solution(String number) {
		
        int answer = 0;
        
        String[] num = number.split("");
        
        for(String a : num) {
        	
        	answer += Integer.parseInt(a);
        	
        }
        
        return answer %= 9;
    }
}