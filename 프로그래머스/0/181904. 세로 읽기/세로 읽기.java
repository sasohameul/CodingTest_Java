class Solution {
    public String solution(String my_string, int m, int c) {
        String answer = "";
        
        StringBuilder sb = new StringBuilder(my_string);
        int num = 1;
        for(int i = 0; i < my_string.length()/m; i++) {
	        		
	        		answer += sb.substring((num-1)*m, num*m).substring(c-1, c);
	        		num++;
	        	}
        return answer;
    }
}