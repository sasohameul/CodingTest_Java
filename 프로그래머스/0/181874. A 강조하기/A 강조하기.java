class Solution {
    public String solution(String myString) {
        String answer = "";
        char[] str = myString.toCharArray();
	        	
	        	for(int i = 0; i < str.length; i++) {
	        		
	        		if(str[i] == 'a'  || str[i] == 'A') {
	        			
	        			answer += myString.valueOf(str[i]).toUpperCase();
	        		} else {
	        			
	        			answer += myString.valueOf(str[i]).toLowerCase();
	        		}
	        	}
        return answer;
    }
}