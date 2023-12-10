class Solution {
    public String solution(String my_string, String letter) {
         String answer = "";
	        String[] str = my_string.split("");
	        
	       for(String s : str) {
	    	   
	    	   if(!s.equals(letter)) answer += s;
	    	   
	       }
	        
	        return answer;
    }
}